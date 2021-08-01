import React from 'react'
// import { useState } from 'react';
import { PrimaryButton } from '../ui/ButtonElements';
import { ProjectsWrapper, ProjectsContainer, CardsContainer, ProjectCard, LineBackground, LineBackgroundTwo, LineBackgroundThree, TitleContainer } from './ProjectsElements';

const projects = [
    {
        title: "Coder-box",
        id: 0,
        gitHub: "",
        webLink:"",
        description: "Proyecto en curso, streamings en twitch, comunidad apx",
        technologies: "",
        image: "/assets/coderbox.png",
        padding: "right",
    },
    {
        title: "E-commerce",
        id: 1,
        gitHub: "",
        webLink:"",
        description: "",
        technologies: "",
        image: "/assets/e-commerce.png",
        padding: "left",
    },
    {
        title: "Calendar-app",
        id: 2,
        gitHub: "",
        webLink: "",
        description: "",
        technologies: "",
        image: "/assets/calendar-app.png",
        padding: "right",
    },
    {
        title: "Streaming-web",
        id: 3,
        gitHub: "",
        webLink:"",
        description: "",
        technologies: "",
        image: "/assets/streaming-web.png",
        padding: "left",
    },
    {
        title: "Ta-te-ti",
        id: 4,
        gitHub: "",
        webLink: "",
        description: "",
        technologies: "",
        image: "/assets/tateti.png",
        padding: "right",
    },
]

const Projects = () => {

    return (
        <ProjectsWrapper id="projects">
            <ProjectsContainer>
                <TitleContainer>
            <h2>Proyectos</h2>
                </TitleContainer>
            <CardsContainer>
                {
                    projects.map( (project, i) => (
                <ProjectCard key={project.title} bgImage={project.image} padding={project.padding} >
                    <p>0{i + 1}</p>
                    <h3>{project.title}</h3>
                </ProjectCard>
                    ))
                }
            <LineBackgroundTwo/>
            <LineBackgroundThree/>
            </CardsContainer>
            <PrimaryButton colorType={"projects"}> Ver más...</PrimaryButton>
            <LineBackground/>
            </ProjectsContainer>
        </ProjectsWrapper>
    )
}

export default Projects;
