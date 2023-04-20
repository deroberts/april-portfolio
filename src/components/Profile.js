import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import profilePic from "../images/derek-zoya.jpg";
import { Card, CardImg } from 'react-bootstrap';
import '../index.css';

const Profile = () => {
    return (
    <main>
    <Card className="picture-card"
    style={{ paddingTop: "10px", paddingBottom: "60px"}}
    >
        <h1 className='card-header' style={{justifyContent: "center"}}>Hello, I'm Derek</h1>
        <Card.Body className="card-body">
          <blockquote className="blockquote mb-0">
            <p>“Peace can be made only by those who are peaceful, 
              and love can be shown only by those who love. No work of love will flourish out of guilt, fear, or hollowness of heart, 
              just as no valid plans for the future can be made by those who have no capacity for living now.”
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Alan Watts</cite>
            </footer>
          </blockquote>

        </Card.Body>
        {/* <h1 className="text-center">Derek Roberts</h1> */}
        {/* <h2 className="text-center">Full Stack Web Developer</h2> */}
        <CardImg
          src={profilePic}
          alt="Profile picture"
          className="rounded-circle img-thumbnail mx-auto d-block"
          style={{ 
            maxWidth: "400px", 
            border: "1px solid black",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 15px" 
          }}
        />
    </Card>
  </main>
    );
};

export default Profile;