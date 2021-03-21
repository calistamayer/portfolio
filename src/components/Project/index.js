import React from 'react';
import photo from "../../assets/images/pets.png";

function Project() {
    const challenge = {
        name: "MustFit Pets",
        description: "React, MongoDB, GraphQL, Heroku"
    };
    return (
        <section>
            <a href="https://quiet-refuge-60774.herokuapp.com/">{challenge.name}</a>
            <p>{challenge.description}</p>
            <div>
                <img src={photo} />
            </div>
        </section>
    );
}

export default Project;