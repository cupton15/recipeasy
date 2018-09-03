import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.login = () => {
      this.setState({ isAuth: true });
    };
    this.logout = this.logout.bind(this);

    this.state = {
        isAuth: false,
        login: this.login,
    };
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
