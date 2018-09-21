import React from 'react';

export default function Header(props) {

  return (
  <div className="nav-container">
    <nav class="level">
      <p class="level-item has-text-centered">
        <a class="link is-info" href="#">Home</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info" href="#">Projects</a>
      </p>
      <h1 class="level-item has-text-centered">Shawn Hassen</h1>
      <p class="level-item has-text-centered">
        <a class="link is-info" href="#">About Me</a>
      </p>
      <p class="level-item has-text-centered">
        <a class="link is-info" href="#">Contact</a>
      </p>
    </nav>
  </div>
  )

}