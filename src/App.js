import React, { Component } from 'react';
import Footer from './components/Footer';
import RecipeSearch from './components/RecipeSearch';
import fontawesome from '@fortawesome/fontawesome';
import { faSearch, faCircleNotch } from '@fortawesome/fontawesome-free-solid';
import './App.css';

fontawesome.library.add(faSearch, faCircleNotch);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          This is the header
        </header>
        <div className="App-main">
         <RecipeSearch></RecipeSearch>
        </div>
        <footer className="App-footer">
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}

export default App;
