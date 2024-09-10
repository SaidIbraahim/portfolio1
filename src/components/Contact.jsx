import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact-section">
      <h2>Get in touch</h2>
      <p>For business and partnership inquiry please contact me below!</p>
      <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} /> +252907841579
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} /> saidibrahim61@outlook.com
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Garowe, Puntland, Somalia
        </div>
      </div>
    </div>
  );
}

export default Contact;
