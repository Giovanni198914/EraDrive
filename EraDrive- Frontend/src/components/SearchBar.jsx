import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap"

const SearchBar = () => {
  return (
    <Container className="mt-5">
      <Form>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Label>Seleziona Pacchetto</Form.Label>
            <Form.Select>
              <option value="1">Pacchetto 1 ora</option>
              <option value="5">Pacchetto 5 ore</option>
              <option value="fullDay">Pacchetto Intera Giornata</option>
            </Form.Select>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Label>Seleziona Modello Auto</Form.Label>
            <Form.Select>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="sportsCar">Auto Sportiva</option>
            </Form.Select>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Label className="invisible">Search</Form.Label>
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBar;
