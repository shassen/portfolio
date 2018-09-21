import React from 'react';

export default function Header(props) {

  return (
    <div class="has-navbar-fixed-top">
    <nav class="level navbar is-fixed-top">
      <p class="level-item has-text-centered">
        <a class="link is-info" href="#">Home</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info" href="#">Projects</a>
      </p>
      <h1 class="level-item has-text-centered"><strong>Shawn Hassen</strong></h1>
      <p class="level-item has-text-centered">
        <a class="link is-info" href="/About">About Me</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info" href="/Contact.jsx">Contact</a>
      </p>
    </nav>
    </div>
  )

}