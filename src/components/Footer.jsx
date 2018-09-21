import React from 'react';

export default function Projects(props) {

  return (
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Webpage</strong> brought to you by <strong><a href="aboutme">{props.name}</a></strong> September 2018
      </p>
    </div>
  </footer>
  )

}