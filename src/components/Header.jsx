import React from 'react';

export default function Header(props) {

  return (
    <div className="has-navbar-fixed-top">
    <nav className="level navbar is-fixed-top">
    
      <p className="level-item has-text-centered">
        <a className="link is-info" href="#projects">Projects</a>
      </p>
      <h1 className="level-item has-text-centered">
      <strong className="link is-info"><a href="#about">Shawn Hassen</a></strong>
      </h1>
      <p className="level-item has-text-centered">
        <a className="link is-info" href="#contact">Contact</a>
      </p>
    </nav>
    </div>
  )

}