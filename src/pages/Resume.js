import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import myResume from '../images/resume.pdf';
import { Container } from 'react-bootstrap';


const Resume = () => {
  
  return (
    <Container fluid className="p-0">
        <div className="resume has-background-grey" style={{ marginTop: '40px' }}>
            <object title="Derek Resume" data={ myResume } type="application/pdf" width="100%" style={{ height: '800px' }}>
            </object>
        </div>

        <div className="resume-right">
          <a style={{color: 'grey'}} className="download-link" href={myResume} download>
            Download My Resume <FaDownload />
          </a>
        </div>
    </Container>
  );
};

export default Resume;