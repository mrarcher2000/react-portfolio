import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '@popperjs/core';

import instapic from '../../assets/instapic.jpg';

function Header() {


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