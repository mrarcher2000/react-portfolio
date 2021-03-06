import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import '@popperjs/core';

import instapic from '../../assets/instapic.jpg';
import Navigation from '../Navigation';

function Header() {

    useEffect(() => {
        document.title = "Archer Nicholson";
    }, []);


    return (
        <Container className="header">
            <Row>
                <h1>Archer Q. Nicholson</h1>
                <span class="span">Full-Stack Developer from Phoenix, Arizona</span>
                <div class="hero-image">
                    <img className="profile-pic" src={instapic} alt="Myself, Archer Nicholson posing for the camera" />
                </div>
                <br /><br />

            </Row>
        </Container>

    )
};

export default Header;