// SearchResults.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarCard from './CarCard';

function SearchResults({ results }) {
  // Verifica se results è un array prima di chiamare il metodo map
  if (!Array.isArray(results)) {
    return <p>Nessun risultato trovato</p>;
  }

  return (
    <Container>
      <Row>
        {results.map((car, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SearchResults;

