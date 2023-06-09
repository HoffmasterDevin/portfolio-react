// Dependency Injections
import React from "react";
import Project from "../../components/Portfolio/Portfolio"
import { Container, Row, Col } from "react-bootstrap";

// Create and export main portfolio component, and define the props to be passed into each Project component
export default function Portfolio() {
    return (
        <Container className="justify-content-center">
            <Row className="justify-content-center justify-content-md-between mb-5">
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Cards & Cartridges"
                        subtitle="Front End App"
                        description="Information about Pokemon games and TCG cards."
                        link1="https://github.com/gpkarlsson/Pokemon-Cards-and-Games-Info-App"
                        tech="Bulma, JavaScript, PokeAPI, Pokemon TCG Developers API, Fetch API"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="ReadMe Generator"
                        subtitle="Command Line App"
                        description="Generate a professional-grade easily using the command line interface."
                        link1="https://github.com/HoffmasterDevin/readME-generator"
                        tech="JavaScript, Node.js, Inquirer, NPM, Template Literals"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="React Portfolio"
                        subtitle="Front End App"
                        description="This portfolio."
                        link1="https://github.com/HoffmasterDevin/portfolio-react"
                        tech="React.js, React Bootstrap, Node.js, NPM"
                    />
                </Col>
            </Row>
            <Row className="justify-content-center justify-content-md-between mb-5">
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Weather Tracker"
                        subtitle="Front End App"
                        description="Search cities in the US to get a forecast. Saves previous searches to local storage."
                        link1="https://github.com/HoffmasterDevin/weather-track-app"
                        tech="JavaScript, Openweather API"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="E-commerce App"
                        subtitle="Full Stack App"
                        description="Under Construction"
                        link1="https://github.com/gpkarlsson/E_commerce_Placeholder"
                        tech="JavaScript,"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Team Generator"
                        subtitle="Command Line App"
                        description="Generates an HTML page with info given through the command line interface."
                        link1="https://github.com/HoffmasterDevin/team-profile-generator"
                        tech="JavaScript, Node.js, Inquirer, Jest"
                    />
                </Col>
            </Row>
        </Container>
    );
}