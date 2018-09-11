import React, { Component } from 'react';

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
    headers['x-access-token'] = `Token ${token}`;

    fetch('http://localhost:3300/api/displayname', { headers })
      .then((res) => {
        if (!res.ok) {
          this.props.logout();
          return;
        }
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
      <span>{this.state.displayName}</span>
    );
  }
}

export default UserDropDown;
