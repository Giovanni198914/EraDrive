import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 mb-0">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <p>Seguici su</p>
            <div>
              <a href="https://www.facebook.com/" target="_blank" className="text-white me-4">
                <FontAwesomeIcon icon={faFacebook} className="text-white  fs-4 " />
              </a>
              <a href="https://twitter.com/" target="_blank" className="text-white  fs-4 me-4 ">
                <FontAwesomeIcon icon={faTwitter} className="text-white  fs-4 " />
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="text-white">
                <FontAwesomeIcon icon={faInstagram} className="text-white  fs-4 " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
