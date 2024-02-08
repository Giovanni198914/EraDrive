import React from 'react';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';
 */
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <p>Seguici su:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
