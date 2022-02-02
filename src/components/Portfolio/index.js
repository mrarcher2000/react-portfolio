import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import gamestersParadise from '../../assets/gamesters-paradise.png';
import theTechBlog from '../../assets/the-tech-blog.png';
import marvelSearch from '../../assets/marvel-search.png';
import runBuddy from '../../assets/run-buddy.png';
import horiseon from '../../assets/horiseon.png';
import codeChallenger from '../../assets/codeChallenger.png';


function Portfolio() {


    return (
        <Row>
            <Col>

                    <div class="project recent-project">
                                <a href="https://mrarcher2000.github.io/run-buddy/" target="_blank">
                                    <img src={runBuddy} alt="Run Buddy is a mock website built for a workout trainer Start Up." />
                                    <p>Run Buddy</p>
                                </a>
                    </div>
                <div class="projects">
                    <div class="project ">
                        <a href="https://github.com/mrarcher2000/code-challenger/" target="_blank">
                            <img src={codeChallenger} alt="Code Challenger is a Social Media page to share your coding abilities through Daily Challenges" />
                            <p>Code Challenger</p>
                        </a>
                    </div>
                    <div class="project">
                        <a href="https://github.com/mrarcher2000/gamesters-paradise/" target="_blank">
                            <img src={gamestersParadise} alt="Gamester's Paradise is a forum made just for gamer's to talk about new video games and share ideas about all things gamer" />
                            <p>Gamester's Paradise</p>
                        </a>
                    </div>
                    <div class="project">
                        <a href="https://github.com/mrarcher2000/the-tech-blog/" target="_blank">
                            <img src={theTechBlog} alt="The Tech Blog is a technology focused blog for tech nerds like myslef to keep up-to-date with the rapidly expanding industry" />
                            <p>The Tech Blog</p>
                        </a>
                    </div>
                    <div class="project">
                        <a href="https://mrarcher2000.github.io/group-api-project/" target="_blank">
                            <img src={marvelSearch} alt="Marvel Superhero Search is a search engine built for nerds to look up any Marvel Universe Character." />
                            <p>Marvel Superhero Search</p>
                        </a>
                    </div>
                                        <div class="project">
                        <a href="https://mrarcher2000.github.io/horiseon/" target="_blank">
                            <img src={horiseon} alt="Horiseon is a mock web page built for their company to explain the importance of S.E.O. and online marketing." />
                            <p>Horiseon</p>
                        </a>
                    </div>
                </div>
            </Col >
        </Row >
    )
}

export default Portfolio;