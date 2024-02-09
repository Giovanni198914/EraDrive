import React from 'react';
import { Card, Container } from 'react-bootstrap';

function Mission() {

    const mission = "In EraDrive, la nostra missione è rendere la mobilità sostenibile accessibile a tutti, attraverso soluzioni innovative che rispettano l'ambiente e migliorano la qualità della vita delle comunità che serviamo.";

    return (
        <Container className="my-5" id="mission">
            <h3 className="mb-4 text-center">La Nostra Mission</h3>
            <Card className="shadow-sm  text-white text-center rounded-5 fs-5 card-style">
                <Card.Body>
                    <Card.Text className='fst-italic'>{mission}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Mission;
