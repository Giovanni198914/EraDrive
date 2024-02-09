import React from 'react';
import { Container } from 'react-bootstrap';

function ChiSiamo() {   
    return (
        <Container className="my-5 chi-siamo-section rounded-5" id="chi-siamo">
            <h2 className="mb-4 text-center">La Storia di EraDrive</h2>
            <p className='fst-italic'>
            EraDrive non è solo adrenalina e velocità. È una comunità di individui che condividono la stessa passione per le auto, il brivido della guida e il rispetto per la tradizione delle corse. È un luogo dove amicizie nascono a 200 km/h e dove ogni curva porta a scoprire non solo i limiti delle nostre macchine, ma anche i propri.
            </p>
        </Container>
    );
}

export default ChiSiamo;
