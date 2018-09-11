import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './UserDropDown.css';

class UserDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
    };
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

  render() {
    return (
      <button className="drop-down-header grow">
        <span>{this.state.displayName}</span>
        <FontAwesomeIcon icon="user" size="2x" />
      </button>
    );
  }
}

export default UserDropDown;
