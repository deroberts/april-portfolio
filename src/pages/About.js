import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Container>
      <div>
        <h2 style={{ marginTop: '40px' }}>About Me</h2>
        <p>
          Hello! My name is Derek, and I recently graduated from KU's
          full-stack web development certification program. In addition to my
          background in web development, I have had a diverse range of work
          experiences, including working as a bartender, a raft guide, a GIS
          mapping tech, and an elementary physical education teacher for 6
          years.
        </p>
        <p>
          I am passionate about building dynamic and engaging web applications
          that solve real-world problems. My technical skills include
          proficiency in HTML, CSS, JavaScript, Node.js, Express.js, Handlebars.js,
          MySQL, MongoDB, Mongoose, React, Tailwind, Bootstrap, and jQuery. I am
          also experienced in working with APIs, JSON, REST, and GraphQL.
        </p>
        <p>
          Outside of work, I enjoy playing disc golf (so my dog Zoya can chase the discs), camping, and spending time with my
          family and friends. Thank you for taking the time to learn a little
          bit about me!
        </p>
      </div>
    </Container>
  );
};

export default About;
