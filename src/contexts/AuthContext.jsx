import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    const token = localStorage.getItem('token');

    this.state = {
        isAuth: !!token,
        login: this.login,
        token,
    };
  }

  login({ auth, token }) {
    this.setState({ isAuth: auth });
    localStorage.setItem('token', token);
  }

  logout() {
    this.setState({ isAuth: false });
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        { this.props.children }
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
