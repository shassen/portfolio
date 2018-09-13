import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">Shawn Hassen</h1>
              <p className="subtitle">
                Welcome to my <strong>Portfolio</strong>
              </p>
              <p>Click the links below to checkout projects i'm working on:</p>
              <div>
              <a href="https://shassen.github.io/reaction-arrow-project1/">Reaction Arrow Game</a>
              <a href="https://floating-waters-77222.herokuapp.com/auth/login">News Crews App</a>
              <a href="http://earthy-lunch.surge.sh/">People Are People App</a>
              <a href="http://voracious-sticks.surge.sh/">Divy App</a>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
