import React, { Component } from 'react';
import aboutpic from '../img/aboutMe.png'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic"> About Me</h1>
                <img src={aboutpic} className="aboutpic" />
                <h2>Hi , I'm Time Worachote</h2>
                <p>
                    “While focusing on statistics and analytics at my university, I worked in the financial sector through an internship at a major multinational firm. My education and tactical experience helped me develop technical capabilities in data engineering and science.
                    I have consistently proven my ability to meet deadlines and achieve project objectives, solve mission-critical problems and prioritize crucial tasks while maintaining the high standards expected of my role. I am currently seeking a position in an established data science firm to further my career goals.”
                </p>
            </div>
        );
    }
}

export default About;