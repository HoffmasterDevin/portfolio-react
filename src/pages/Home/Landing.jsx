import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Landing() {

    return (
        <div  style={{ width: '25rem', 
        display: 'flex', 
        justifyContent: 'center', 
        backgroundColor: '#BCF3ED',
        boxShadow: ' 5px 5px 5px gray', 
        margin: 'auto'}}>
            <Card >
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/headshot.png'} />
                <Card.Body>
                    <Card.Title>Devin Hoffmaster</Card.Title>
                    <Card.Text>
                       My interactive portfolio!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}