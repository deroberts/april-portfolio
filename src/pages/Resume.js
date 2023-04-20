import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import myResume from '../images/resume.pdf';

const Resume = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        Resume
      </h1>
      <div className="resume-section">
        <ul className="resume-left">
          <p className="tech-header">Technical Proficiencies</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Handlebars</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
            <li>jQuery</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>APIs</li>
            <li>JSON</li>
            <li>REST</li>
            <li>GraphQL</li>


        </ul>
        <div className="resume-right">
          <a style={{color: 'grey'}} className="download-link" href={myResume} download>
            Download My Resume <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;