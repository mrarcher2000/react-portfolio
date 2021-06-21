import React, { useState } from 'react';
import { ListGroup, Nav, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PageElement from '../PageElement';


function Navigation() {

    const [pages] = useState(['aboutme', 'portfolio', 'resume', 'contact']);

    const [currentPage, setCurrentPage] = useState(pages[0]);


    return (
        <div className="navigationbar">
            <Container>
                <Row>
                    <Nav 
                    className="justify-content-center" 
                    variant="pills" 
                    activeKey={currentPage}
                    onSelect={(selectedKey) => setCurrentPage(selectedKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="aboutme">About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="resume">Resume</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Row>

                <PageElement 
                    pages = {pages}
                    currentPage = {currentPage}
                />

            </Container>

        </div>
    )
}

export default Navigation;