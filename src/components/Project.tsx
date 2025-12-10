import React from 'react';
import mock07 from '../assets/images/elern.png';
import mock08 from '../assets/images/stickitup.png';
import mock09 from '../assets/images/food.png';
import mock10 from '../assets/images/stories.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Prasad1102/Stories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Prasad1102/Stories"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Stories</h2>
          </a>
          <p>
            Stories is a blogging platform built with Django and Django
            Templates. I independently managed the entire frontend and backend
            development.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Prasad1102/FoodOrderSystem"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Prasad1102/FoodOrderSystem"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Kitchen King</h2>
          </a>
          <p>
            Kitchen King is a complete food ordering web application created
            using Django and Django Templates, covering both frontend and
            backend development.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.stickitupcustoms.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.stickitupcustoms.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Stickitup Customs</h2>
          </a>
          <p>
            Stickitup Customs is an e-commerce website for selling stickers,
            developed using Ruby on Rails for the backend and React.js with
            Material UI for the frontend.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Prasad1102/TestEagles"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/Prasad1102/TestEagles"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Test Eagels</h2>
          </a>
          <p>
            Test Eagles is an e-learning platform developed as a full-stack
            project using Django and Django Templates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
