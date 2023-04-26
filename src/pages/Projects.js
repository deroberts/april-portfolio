import React, { useState, useEffect } from "react";
import getRepositories from "../components/GitHub";
import "bulma/css/bulma.css";
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';



const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await axios.get(`${GITHUB_API_URL}/users/deroberts/repos`);
            const repositories = response.data.filter((repo) => ["4-dudes-gaming-reviews", "coffeebreak-crew-mysql", "merny-tales-book-engine","mongoose-juice", "dnd-character-creator"].includes(repo.name));
            const projects = repositories.map((repo) => ({
                name: repo.name,
                description: repo.description,
                api_url: repo.languages_url,
                website_url: repo.homepage || repo.html_url,
            }));
            setProjects(projects);
        };
        getProjects();
    }, []);

    return (
        <main>
            <div className="projects">
           <h1> Projects </h1>
           <div className="project-cards">
            {projects.map((project) => (
                <Card key={project.name}>
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button className="button is-primary" href={project.api_url}>View API Info</Button>
                        <Button className="button is-link" href={project.website_url}>View Repository</Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
            </div>
        </main>
        
    );
};

export default Projects;