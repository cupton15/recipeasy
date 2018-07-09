import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import { faSearch, faCircleNotch } from '@fortawesome/fontawesome-free-solid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import './App.css';

fontawesome.library.add(faSearch, faCircleNotch);

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipeasy</h1>
      </header>
      <div className="App-main">
        <Route exact path="/" component={RecipeSearch} />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;
