
import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSearch }) {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      // Costruisci la query string basata sui filtri selezionati
      const queryString = `?package=${selectedPackage}&model=${encodeURIComponent(selectedModel)}`;
      const response = await fetch(`http://localhost:3030/api/cars${queryString}`);
      const data = await response.json();

      onSearch(data);
    } catch (error) {
      console.error('Errore durante il recupero dei dati: ', error);
      setError('Impossibile recuperare i dati');
    }
  };

  return (
    <Container className="mt-5 fs-6 bg-light rounded-5 p-3 mb-5" id="prenota">
      <Form>
        <Row>
          <Col md={5} className="mb-3 text-center">
            <Form.Label>Seleziona Pacchetto</Form.Label>
            <Form.Select className='rounded-5' onChange={(e) => setSelectedPackage(e.target.value)}>
              <option value="-" className='text-center'> - </option>
              <option value="1">Pacchetto 1 ora</option>
              <option value="5">Pacchetto 5 ore</option>
              <option value="fullDay">Pacchetto Intera Giornata</option>
            </Form.Select>
          </Col>
          <Col md={5} className="mb-3 text-center">
            <Form.Label>Seleziona Modello Auto</Form.Label>
            <Form.Select className='rounded-5' onChange={(e) => setSelectedModel(e.target.value)}>
              <option value="default" className='text-center'> - </option>
              <option value="Alfa Romeo 75 Turbo Evoluzione">Alfa Romeo 75 Turbo Evoluzione</option>
              <option value="Chevrolet Corvette ZR-1 C4">Chevrolet Corvette ZR-1 C4</option>
              <option value="Ferrari Enzo">Ferrari Enzo</option>
              <option value="Ferrari F40">Ferrari F40</option>
              <option value="Ferrari F50">Ferrari F50</option>
              <option value="Ford GT">Ford GT</option>
              <option value="Ford Mustang 1967">Ford Mustang 1967</option>
              <option value="Lamborghini Diablo">Lamborghini Diablo</option>
              <option value="Lancia Delta ">Lancia Delta </option>
              <option value="Porsche 911 Turbo ">Porsche 911 Turbo </option>
            </Form.Select>
          </Col>
          <Col md={2} className="mb-3">
            <Form.Label className="invisible"> CERCA </Form.Label>
            <Button variant="danger" onClick={handleClick} className="w-100 fs-6 rounded-5">
              CERCA <FontAwesomeIcon icon={faCar} className='text-white ms-2' />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchBar;

