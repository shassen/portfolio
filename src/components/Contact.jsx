import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props) {

  return (
    <section id="contact" className="section is-medium">
      <div className="container">
        <h1 className="headers"><strong>Contact Me:</strong></h1><br />
        <a className="contact" href="mailto:shassen89@gmail.com">< FontAwesomeIcon icon={faEnvelope} /></a>
        <a className="contact" href={props.social.linkedIn}>< FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="contact" href={props.social.github}>< FontAwesomeIcon icon={faGithub} /></a>
        <a className="contact" href={props.social.instagram}>< FontAwesomeIcon icon={faInstagram} /></a>
        <a className="contact" href={props.social.twitter}>< FontAwesomeIcon icon={faTwitter} /></a>
        <a className="contact" href={props.social.facebook}>< FontAwesomeIcon icon={faFacebook} /></a>
      </div>
    </section>
  )

}