import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sfondo1 from '../photos/Sfondo1.jpg';
import Sfondo2 from '../photos/Sfondo2.jpg';
import Sfondo3 from '../photos/Sfondo3.jpg';
import "../App.css"

function HeroSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Sfondo1}
          alt="First slide"
          style={{ height: '800px' }}
        />
        <Carousel.Caption>
        <h3>Senti il rombo del motore, vivi l'ebbrezza: il nostro sito, la tua avventura da corsa.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  img-fluid"
          src={Sfondo2}
          alt="Second slide"
          style={{ height: '800px' }}
        />
        <Carousel.Caption>
        <h3>Esperienze da corsa: il viaggio più emozionante della tua vita inizia qui!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Sfondo3}
          alt="Third slide"
          style={{ height: '800px' }}
        />
        <Carousel.Caption>
          <h3>Guida il sogno: il nostro sito, la tua pista personale.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;