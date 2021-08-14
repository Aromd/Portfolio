import React, { useState } from 'react'
// import { useState } from 'react';
import { PrimaryButton } from '../ui/ButtonElements';
import {
  ProjectsWrapper,
  ProjectsContainer,
  CardsContainer,
  ProjectCard,
  LineBackground,
  LineBackgroundTwo,
  LineBackgroundThree,
  TitleContainer,
  InfoCard,
  ProjectCardContainer,
  TechnoParagraph,
  GithubButton,
  EyeButton,
  InfoCardWrapper,
  LinksContainerProjects,
  TitleWrapper,
  SeeMoreButton
} from "./ProjectsElements";
import { initialProjects, totalProjects } from '../../data/projectsData'; 



const Projects: React.FC = () => {
    
    const [className, setClassName] = useState("");

    const [projects, setProjects] = useState(initialProjects);
    const [buttonView, setButtonView] = useState(true);

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
        <ProjectsWrapper id="projects">
            <ProjectsContainer>
                <TitleContainer>
            <h2>Proyectos</h2>
                </TitleContainer>
            <CardsContainer>
                {
                    projects.map( (project, i) => (
                        
                        <ProjectCardContainer key={project.title} >
                            <ProjectCard bgImage={project.image} padding={project.padding} className={`${(project.id > 4)  ? "animate__animated animate__fadeInUp" : ""}  ${className}`} onClick={handleClick}>
                                <p>0{i + 1}</p>
                                <h3>{project.title}</h3>
                            </ProjectCard>
                            <InfoCard padding={project.padding} className={`animate__animated animate__fadeIn ${className}`}>
                                <InfoCardWrapper>
                                    <TitleWrapper>
                                <h3>{project.title}</h3>
                                <p>0{i + 1}</p>
                                    </TitleWrapper>
                                <p>{project.description}</p>
                                <TechnoParagraph>
                                    {project.technologies}
                                </TechnoParagraph>
                                <LinksContainerProjects projectID={project.id}>
                                    <GithubButton href={project.gitHub} target="_blank" rel="noreferrer" ><img src="/assets/github-brands.svg" alt="github"></img></GithubButton>
                                    <EyeButton href={project.webLink} target="_blank" rel="noreferrer" ><img src="/assets/eye-solid.svg" alt="web"></img></EyeButton>
                                    {
                                        (project.id < 5)
                                        ?
                                        <SeeMoreButton to={{pathname: `/${project.title.toLowerCase()}`}} > + INFO</SeeMoreButton>
                                        :
                                        null
                                    }
                                </LinksContainerProjects>
                                </InfoCardWrapper>
                            </InfoCard>
                        </ProjectCardContainer>
                        
                    ))
                }
            <LineBackgroundTwo buttonView={buttonView}/>
            <LineBackgroundThree buttonView={buttonView}/>
            </CardsContainer>
            {buttonView && <PrimaryButton colorType={"projects"} onClick={moreProjects}> + Proyectos </PrimaryButton>}
            <LineBackground buttonView={buttonView}/>
            </ProjectsContainer>
        </ProjectsWrapper>
    )
}

export default Projects;
