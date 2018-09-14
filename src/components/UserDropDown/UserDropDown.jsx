import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import './UserDropDown.css';

class UserDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      opened: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const headers = { 'Content-type': 'application/json' };
    headers['x-access-token'] = token;

    fetch('http://localhost:3300/api/displayname', { headers })
      .then((res) => {
        if (!res.ok) {
          throw Error(res.status);
        }
        return res.json();
      })
      .then((res) => {
        this.setState({
          displayName: res.displayName,
        });
      })
      .catch(() => {
        this.props.logout();
      });
  }

  openMenu(event) {
    event.preventDefault();

    this.setState({
      opened: true,
    }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
      this.setState({
        opened: false,
      }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  logout(event) {
    event.preventDefault();

    this.props.logout();
  }

  render() {
    const dropDownClass = classNames({
      'drop-down': true,
      opened: this.state.opened,
    });

    return (
      <div className={dropDownClass}>
        <button className="drop-down-header grow" onClick={this.openMenu}>
          <span>{this.state.displayName}</span>
          <FontAwesomeIcon icon="user" size="2x" />
        </button>
        <CSSTransition in={this.state.opened} classNames="menu" timeout={{ enter: 300, exit: 0 }} unmountOnExit>
          <div className="menu" ref={(element) => { this.dropdownMenu = element; }}>
            <button onClick={this.logout}>logout</button>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default UserDropDown;
