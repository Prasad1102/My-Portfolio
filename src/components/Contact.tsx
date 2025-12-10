import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            I’m always excited to collaborate or discuss new opportunities! Feel
            free to reach out to me via email or WhatsApp.
          </p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:your.email@example.com">
                shelkeprasad1102@gmail.com
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/918080398067"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 8080398067
              </a>
            </p>
          </div>
          <p>Looking forward to connecting with you!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
