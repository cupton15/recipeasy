import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ isAuth: true });
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
