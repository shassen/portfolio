import React from 'react';

export default function Header(props) {

  return (
    <div className="has-navbar-fixed-top">
    <nav className="level navbar is-fixed-top">
      <p className="level-item has-text-centered">
        <a className="link is-info" href="#">Home</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info" href="#">Projects</a>
      </p>
      <h1 className="level-item has-text-centered"><strong>Shawn Hassen</strong></h1>
      <p className="level-item has-text-centered">
        <a className="link is-info" href="/About">About Me</a>
      </p>
      <p className="level-item has-text-centered">
        <a className="link is-info" href="/Contact.jsx">Contact</a>
      </p>
    </nav>
    </div>
  )

}