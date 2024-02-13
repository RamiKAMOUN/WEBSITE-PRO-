// Contact.js

import React from 'react';
import { FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <FaClock className="contact-icon" />
        <div>
          <h3>HEURES DE TRAVAIL</h3>
          <p>Lundi - Vendredi</p>
          <p>08:30 - 12:30</p>
          <p>14:00 - 18:00</p>
        </div>
      </div>

      <div className="contact-section">
        <FaPhone className="contact-icon" />
        <div>
          <h3>APPELEZ-NOUS EN TOUT TEMPS</h3>
          <p>0033 (0)1 84 19 94 14</p>
          <p>00216 29 65 60 46</p>
        </div>
      </div>

      <div className="contact-section">
        <FaEnvelope className="contact-icon" />
        <div>
          <h3>ENVOYEZ-NOUS UN EMAIL</h3>
          <p>contact@progedsolutions.com</p>
          <p>support@progedsolutions.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
