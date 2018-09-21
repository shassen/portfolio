import React from 'react';

export default function Projects(props) {

  return (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Webpage</strong> brought to you by <strong><a href="aboutme">{props.name}</a></strong> September 2018
      </p>
    </div>
  </footer>
  )

}