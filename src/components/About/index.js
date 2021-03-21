import React from 'react';
import headshot from '../../assets/images/Headshot.JPG';

function About() {
    return (
        <section class="hero">
            <div class="content-item about-calista content-header" id="about-calista">
                <h2>About Calista</h2>
            </div>
            <img src={headshot} alt="Calista Mayer headshot" />
            <div class="content-item about-calista">
                <p>
                    Calista Mayer is a beginner at web development, enrolled in UCBE's Coding Bootcamp. Her interest in web development began in seventh grade when she began to use HTML and CSS to customize pages on Neopets.com.
                    <br /><br />
                    At Western Washington University, Calista majored in Philosophy. Her favorite philosophical sub-topics include Asian philosophies such as yoga, Daoism, and zen. Symbolic logic, a key component in evaluating philosophical arguments, is reflected in the logical structure of technologies like HTML and CSS.
                 </p>
            </div>
        </section>
    );
}

export default About;