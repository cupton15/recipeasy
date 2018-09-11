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
        logout: this.logout,
        token,
    };
  }

  login({ auth, token, displayName }) {
    localStorage.setItem('token', token);
    this.setState({ 
      isAuth: auth,
      displayName: displayName,
    });
  }

  logout() {
    localStorage.removeItem('token');
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
