import React from "react";
import { Card } from "react-bootstrap";

export default function AboutMe() {
  return (
    <div>
      <Card
        className="MAIN_CARD  justify-content-center container-fluid"
        style={{ width: "70%", display: "flex", justifyContent: "center" }}
      >
        <Card.Body>
          <Card.Title>
            Devin Hoffmaster: About Me <br />
            <br /> He is anticipating graduation from the University of
            Wisconsin Full Stack Web Development Bootcamp in May of 2023.
          </Card.Title>
        </Card.Body>
      </Card>

      <Card className="justify-content-center container-fluid mt-5 mb-5" style={{ width: '75%' }}>
        <Card.Body>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}><u>Resume</u></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">SKILLS: HTML, CSS, JavaScript, React, Node.js, Bootstrap, MySQL, MongoDB, Git, GitHub, NPM </Card.Subtitle>
          <Card.Text>
            12/2022 – Present<br />
            <em><b>Garde Manger, A Pig in a Fur Coat</b></em><br />
            • <br />
            • <br />
            • <br />
            • <br />
            • <br /><br />
            12/2021 – 12/2022<br />
            <em><b>Lead Line Cook, Graft</b></em><br />
            • <br />
            • <br />
            • <br />
            • <br /><br />
            <em><b>Kitchen Manager, Red Sushi</b></em><br />
            • <br />
            • <br />
            • <br /><br />
            <em><b>EDUCATION</b></em><br />
            MAY 2023 <br />
            <em><b>Full Stack Web Development, University of Wisconsin Madison Boot Camp</b></em><br />
            JUNE 2014 <br />
            <em><b>High School Diploma, McFarland High School</b></em><br />
          </Card.Text>
          {}
        </Card.Body>
      </Card>
    </div>
  );
}