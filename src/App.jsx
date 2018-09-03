import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { faSearch, faCircleNotch } from '@fortawesome/fontawesome-free-solid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';

fontawesome.library.add(faSearch, faCircleNotch);

const App = () => (
  <Router>
    <div className="App">
      <AuthProvider>
        <header className="App-header">
          <NavBar />
        </header>
      </AuthProvider>
      <div className="App-main">
        <Route exact path="/" component={RecipeSearch} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;
