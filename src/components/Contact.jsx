import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props) {

  return (
    <section id="contact" className="section is-medium">
      <div className="container">
        <h1 className="headers"><strong>Contact Me:</strong></h1><br />
        <a href="mailto:shassen89@gmail.com"><h1>Email: {props.info.email} < FontAwesomeIcon icon={faEnvelope} /></h1></a>
        <a href={props.social.linkedIn}>< FontAwesomeIcon icon={faLinkedin} /></a>
        <a href={props.social.github}>< FontAwesomeIcon icon={faGithub} /></a>
        <a href={props.social.instagram}>< FontAwesomeIcon icon={faInstagram} /></a>
        <a href={props.social.twitter}>< FontAwesomeIcon icon={faTwitter} /></a>
        <a href={props.social.facebook}>< FontAwesomeIcon icon={faFacebook} /></a>
      </div>
    </section>
  )

}