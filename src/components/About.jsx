import React from 'react';

export default function About(props) {

  return (
  <section id="about" className="section is-medium">
    <div className="container">
      <h1 className="headers"><strong>About Me:</strong></h1><br />
      <div className="profile">
      <img className="profile-img" src="https://user-images.githubusercontent.com/34017019/51342654-6f6c5a80-1a62-11e9-906a-655c4d4bc396.jpg" />
      <p className="profile-bio">I am a proactive web developer committed to the pursuit of debugged applications through concise, clean and intentional code. I have experience working with both front and back-end techniques, and enjoy both as they present unique challenges to solve. 
         My experience in finance has created a passion for working with data and developing solutions for automating mundane workflows. My favorite aspect of web development is that I have the ability to mold the future of technology and build a better world. Let’s build a better future together.
      </p>
      </div>
    </div>
  </section>
  )

}