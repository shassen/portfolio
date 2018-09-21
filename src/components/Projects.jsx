import React from 'react';

export default function Projects(props) {

  return (
    <section className="section is-large">
      <div className="container">
        <h1 className="headers"><strong>My Projects:</strong></h1><br />
        {/* <a href={props.projects.tff.url}>{props.projects.tff.name}</a> */}
        <a href={props.projects.ra.url}><strong>{props.projects.ra.name}</strong></a>
        <p>Reaction arrow is a fun game you can play with the arrow keys on your keyboard. Test your reaction time
           by hitting the red arrow as fast as possible.
        </p><br />
        <a href={props.projects.divy.url}><strong>{props.projects.divy.name}</strong></a>
        <p>Divy is an app I developed to make cash reconciliation easier for everyone. Simply register as a user, create a transaction
           and start adding other users to the transaction you wish to split the cost with.
        </p><br />
        <a href={props.projects.pap.url}><strong>{props.projects.pap.name}</strong></a>
        <p>People Are People is an app created by three developers and I specifically for the General Assembly network.
           Students, alumni and employees can choose interests and see other users with similar interests. Go check it out!
        </p><br />
      </div>
    </section>
  )

}