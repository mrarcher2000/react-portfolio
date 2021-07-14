import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function AboutMe() {


    return (
            <Row >
                <Col>
                <p className="desc">Hello! My name is Archer Nicholson and I am a 20 year old Full-Stack Web Developer located in Phoenix, Arizona. <br /> 
                    I am a recent graduate of the University of Arizona Coding Bootcamp and looking to begin a career in computer programming.  <br />
                    <br/>{String.fromCharCode(8900)}{String.fromCharCode(8900)}{String.fromCharCode(8900)} <br/>
                    I have experience working on my own on projects developing websites from the Front-End to the Back-End as well <br />
                    as experience working on a team remotely through Zoom, Teams, and Slack to create websites and servers from<br />
                    scratch. I am capable of utilizing Front-End frameworks like HTML5, CSS, JavaScript, and Handlebars as well as using back-end <br />
                    technologies such as Node.js, Express, MySQL, and Sequelize to create databases, render HTML dynamically, and create <br />
                    functioning APIs. I also have learned on-the-job development methods such as AGILE development, Object-Oriented <br />
                    Programming, Test Driven Development, and Model-View-Controller layout. Lastly, I am skilled in the MERN development <br />
                    stack, using MongoDB, Express, React.js and Node.js to create full-stack, single-page applications <br />
                    and Progressive Web Applications. <br />
                    <br /> {String.fromCharCode(8900)}{String.fromCharCode(8900)}{String.fromCharCode(8900)} <br/>

                    Currently, I am employed with Empereon Constar as the Team Lead of the Frontier Communications Customer <br />
                    Service campaign. My daily duties currently involve assisting the supervisors in keeping track of agent numbers,<br />
                    managing time spent on calls, coaching and providing feedback on the agent's calls, and following the FCC Regulations <br />
                    when it comes to keeping Customer Proprietary Network Information secure.
                    <br />
                </p>
                </Col>
                
            </Row>
    )
}

export default AboutMe;