import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import DreamCreation from '../Images/DreamCreations.PNG';
import SmartCellular from '../Images/SmartCellular.PNG';
import BestOfTheBest from '../Images/BestOfTheBest.PNG';

const Projects = () => {
    return (
        <div className="d-flex justify-content-center text-center m-5" id="projects">
            <div className="w-75">
                <div className="mb-5">
                    <h1>My Projects</h1>
                </div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={DreamCreation} />
                        <Card.Body>
                            <Card.Title>Dream Creations</Card.Title>
                            <Card.Text>
                                It is an Website Based on Event Management.
                            </Card.Text>
                            <Button variant="outline-info">See Details</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={SmartCellular} />
                        <Card.Body>
                            <Card.Title>Smart Cellular</Card.Title>
                            <Card.Text>
                                It is an Website, Where anyone can buy a Mobile Phone.
                            </Card.Text>
                            <Button variant="outline-info">See Details</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={BestOfTheBest} />
                        <Card.Body>
                            <Card.Title>Best Of The Best</Card.Title>
                            <Card.Text>
                                It is an Website Showing Team Information Of English Premier League.
                            </Card.Text>
                            <Button variant="outline-info">See Details</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    );
};

export default Projects;