import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function Contact() {



    return (
        <Row>
            <Col>
                <div>
                    <br/>
                    <h2>Thanks again for visting my page!</h2> <br/>
                    <p className="desc">For business inquiries, email me at <a href="mailto:archernich@gmail.com" target="_blank">archernich@gmail.com</a>. Leave your name and best means of contact and I <br/> will get back as soon as possible!</p>
                </div>
                <div>
                    <p className="desc">To call me, reach out to my number (602)-802-6756 . If I am unavailable, please leave a voicemail with your name <br /> and number and I will reach out to you shortly.</p>
                </div>
                <div>
                    <p className="desc">To see more projects and my most recent works, check out my <a href="https://github.com/mrarcher2000" target="_blank" rel="noreferrer">GitHub</a> profile!</p>
                    <p className="desc">You can also check out my other Social Media profiles by clicking one of the Links below!</p>
                </div>
                
            </Col>
        </Row>
    )
}


export default Contact;