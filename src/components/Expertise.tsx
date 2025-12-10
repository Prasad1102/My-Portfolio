import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Ruby on Rails',
  'Django',
  'Python',
  'SQL',
  'PostgreSQL',
  'Postman',
];

const labelsSecond = [
  'Git',
  'GitHub Actions',
  'GitLab CI/CD',
  'GitHub',
  'Github CI/CD',
];

const labelsThird = [
  'REST APIs',
  'PostgreSQL',
  'Postman',
  'MySQL',
  'Django',
  'Authentication',
  'Ruby on Rails',
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I build full-stack web applications using React and Ruby on Rails,
              handling everything from UI development to backend APIs and
              database integration. I follow the SDLC process to deliver clean,
              scalable, and efficient solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I work with CI/CD pipelines using GitLab and GitHub to automate
              build, test, and deployment processes. I collaborate with test
              engineers to integrate automated testing into the release cycle,
              ensuring faster and more reliable deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>API Development</h3>
            <p>
              I build secure and scalable REST APIs, integrating backend
              services with databases, authentication, and external systems. I
              focus on clean architecture, performance, and reliable data flow
              across applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;