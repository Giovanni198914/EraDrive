import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faInfo } from '@fortawesome/free-solid-svg-icons';

function CarCard ({ car }) {
  const { CarModel, image, description, price, offerPackage } = car;

  return (
    <Card className="mb-3 border border-2 shadow" style={{ transition: 'all 0.3s ease-in-out' }}>
      <Card.Img variant="top" src={image} alt={CarModel} fluid />
      <Card.Body>
        <Card.Title>{CarModel}</Card.Title>
        <Card.Text className="text-truncate" style={{ maxHeight: '100px' }}>
          {description}
        </Card.Text>
        <Card.Text>Pacchetto: {offerPackage}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="danger" className='text-white'>Prenota <FontAwesomeIcon icon={faCartShopping} className='text-white ms-2' /></Button>
          <div className="d-flex align-items-center">
            <Button variant="link" className="text-muted me-2 bg-light py-0"> <FontAwesomeIcon icon={faInfo} className='text-danger fs-4' /></Button>
            <span className="text-muted fs-4  fw-bold">{price}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CarCard;

