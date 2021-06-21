import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import resumePDF from '../../assets/Archer-Nicholson.pdf';


function Resume() {


    return (
        <Row>
            <Col>
                <h3>To download a PDF copy of my most up-to-date Resume, click <a href={resumePDF} target="_blank" download>here.</a></h3>
                <div class="resume-body">
                    <div class="resume-block">
                        <h3>Frontier Communications // Empereon Constar - <span>Customer Service Team Lead</span></h3>
                        <h4>April 2020 - Present</h4>
                        <ul>
                            <li>Assisting agents on Customer Service calls to manage service orders, internet and/or phone outages, and <br /> billing information.</li>
                            <li>Coaching team members to improve customer service skills and use of in-office programs.</li>
                            <li>Reviewing site numbers based on Customer Satisfaction, Average Handling Time, Rate of Repeat calls, and more <br /> to compare to other sites and customer service centers.</li>
                            <li>Following FCC regulations as well as Customer Proprietary Network Information (CPNI) guidelines to ensure<br /> security of personal information. </li>
                        </ul>
                    </div> <br />
                    <div class="resume-block">
                        <h3>
                            Norwegian Cruise Lines // The Pride of America - <span>Assistant Waiter</span>
                        </h3>
                        <h4>
                            August 2019 - March 2020
                        </h4>
                        <ul>
                            <li>Assisting Front Waiters, bussing tables, and serving guests in a fine-dining environment.</li>
                            <li>Preparing dining rooms for service and cleaning after meal times</li>
                            <li>Sign in guests at muster station and lead them to a lifeboat in case of an emergency</li>
                        </ul>
                    </div> <br />
                    <div class="resume-block">
                        <h3>
                            Chipotle Mexican Grill - <span>Front of House Trainer</span>
                        </h3>
                        <h4>
                            September 2017 - September 2019
                        </h4>
                        <ul>
                            <li>Prepare food on the line as ordered by viewing customer</li>
                            <li>Use a POS system to charge customers for products bought, keep track of sales, and process online orders.</li>
                            <li>Prepare both hot and cold items for the line while maintaining back of house cleanliness and following food <br /> safety guidelines.</li>
                        </ul>
                    </div><br />
                    <div class="resume-block">
                        <h3>
                            McDonald's - <span>Crew Manager</span>
                        </h3>
                        <h4>
                            June 2016 - September 2017
                        </h4>
                        <ul>
                            <li>Counting the safe and cashier drawers at open, during the day, and at close to ensure proper money handling <br /> from employees</li>
                            <li>Taking orders and preparing orders to be given to customers while continuing to follow food safety guidelines.</li>
                            <li>Training and overseeing new crew members so they have the tools to complete their tasks effectively and <br /> efficiently.</li>
                        </ul>
                    </div> <br />
                </div>
            </Col>
        </Row>
    )
}


export default Resume;