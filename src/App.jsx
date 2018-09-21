import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "Shawn Hassen",
        email: "Shassen89@gmail.com",
      },
      contact: {
        linkedIn: 'https://www.linkedin.com/in/shawn-hassen/',
        facebook: 'https://www.facebook.com/shawn.hassen',
        instagram: 'https://www.instagram.com/shawn.hassen/',
        twitter: 'https://twitter.com/thereal_shassen',
        github: 'https://github.com/shassen',
      },
      projects: {
        tff: {
          name: 'Three Friends and a Foundation',
          url: '',
          img: '',
        },
        ra: {
          name: 'Reaction Arrow',
          url: 'https://shassen.github.io/reaction-arrow-project1/',
          img: '',
        },
        divy: {
          name: 'Divy',
          url: 'http://voracious-sticks.surge.sh/',
          img: '',
        },
        pap: {
          name: 'People Are People',
          url: 'http://earthy-lunch.surge.sh/',
          img: '',
        },
        nc: {
          name: 'News Crews',
          url: 'https://floating-waters-77222.herokuapp.com/auth/login',
          img: '',
        }
      },

    }
  }


  render() {


    return (
      <div id="home" className="App">
        <Header />
        <About name={this.state.info}/>
        <Projects projects={this.state.projects}/>
        <Contact info={this.state.info} social={this.state.contact}/>
        <Footer name={this.state.info.name}/>
      </div>
        );
      }

    }
    
    export default App;
