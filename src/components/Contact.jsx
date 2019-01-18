import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props) {

  return (
    <section id="contact" className="section is-small">
      <div className="container">
        <h1 className="headers"><strong>Contact Me:</strong></h1><br />
        <a className="contact" href="mailto:shassen89@gmail.com"><i className="fa-3x">< FontAwesomeIcon icon={faEnvelope} /></i></a>
        <a className="contact" href={props.social.linkedIn}><i className="fa-3x">< FontAwesomeIcon icon={faLinkedin} /></i></a>
        <a className="contact" href={props.social.github}><i className="fa-3x">< FontAwesomeIcon icon={faGithub} /></i></a>
        <a className="contact" href={props.social.instagram}><i className="fa-3x">< FontAwesomeIcon icon={faInstagram} /></i></a>
        <a className="contact" href={props.social.twitter}><i className="fa-3x">< FontAwesomeIcon icon={faTwitter} /></i></a>
        <a className="contact" href={props.social.facebook}><i className="fa-3x">< FontAwesomeIcon icon={faFacebook} /></i></a>
      </div>
    </section>
  )

}