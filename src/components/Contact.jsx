import React from 'react';

export default function Contact(props) {

  return (
    <section className="section is-medium">
      <div className="container">
          <h1>{props.info.email}</h1>
          <a href={props.social.linkedIn}>LinkedIn</a>
          <a href={props.social.github}>Github</a>
          <a href={props.social.instagram}>Instagram</a>
          <a href={props.social.twitter}>Twitter</a>
          <a href={props.social.facebook}>Facebook</a>
      </div>
    </section>
  )

}