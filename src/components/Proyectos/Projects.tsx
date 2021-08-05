import React, { useState } from 'react'
// import { useState } from 'react';
import { PrimaryButton } from '../ui/ButtonElements';
import { ProjectsWrapper, ProjectsContainer, CardsContainer, ProjectCard, LineBackground, LineBackgroundTwo, LineBackgroundThree, TitleContainer } from './ProjectsElements';
import useNearScreen from '../../hooks/useNearScreen';


const initialProjects = [
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

const totalProjects = [
{
    title: "Ah",
    id: 5,
    gitHub: "",
    webLink: "",
    description: "",
    technologies: "",
    image: "/assets/tateti.png",
    padding: "left",
},
{
    title: "Queré peleá",
    id: 6,
    gitHub: "",
    webLink: "",
    description: "",
    technologies: "",
    image: "/assets/tateti.png",
    padding: "right",
},
]

const Projects = () => {
    
    const [className, setClassName] = useState("");

    const [projects, setProjects] = useState(initialProjects);
    const [buttonView, setButtonView] = useState(true);

    const { isNearScreen, fromRef } = useNearScreen({distance: "100px"});

    const moreProjects = () => {
        setProjects(projects => [...projects, ...totalProjects]);
        setButtonView(false);
    }

    const handleClick = () => {
        (!className)?
        setClassName("active")
        :
        setClassName("")
    }

    return (
        <ProjectsWrapper id="projects" ref={fromRef}>
            {
                isNearScreen ?
            <ProjectsContainer>
                <TitleContainer>
            <h2>Proyectos</h2>
                </TitleContainer>
            <CardsContainer>
                {
                    projects.map( (project, i) => (
                        <>
                <ProjectCard key={project.title} bgImage={project.image} padding={project.padding} className={className} onClick={handleClick}>
                    <p>0{i + 1}</p>
                    <h3>{project.title}</h3>
                </ProjectCard>
                {/* <div>hola</div> */}
                </>
                    ))
                }
            <LineBackgroundTwo buttonView={buttonView}/>
            <LineBackgroundThree buttonView={buttonView}/>
            </CardsContainer>
            {buttonView && <PrimaryButton colorType={"projects"} onClick={moreProjects}> No me toques </PrimaryButton>}
            <LineBackground buttonView={buttonView}/>
            </ProjectsContainer>
            :
            null
            }
        </ProjectsWrapper>
    )
}

export default Projects;
