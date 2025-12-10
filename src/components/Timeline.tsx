import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              FullStack Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pune, Maharashtra
            </h4>
            <p>
              Got the opportunity to work as a Full Stack Developer at Axonwise
              Technologies, where I worked with the Ruby on Rails and React.js
              tech stack.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pune, Maharashtra
            </h4>
            <p>
              Got my first internship at Axonwise Technologies, where I worked
              with React.js and Material UI. I handled the entire frontend of a
              project single-handedly, building responsive and user-friendly
              interfaces.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <p>
          <b>Total Industry Experience:</b> 1+ Year
        </p>
      </div>
    </div>
  );
}

export default Timeline;