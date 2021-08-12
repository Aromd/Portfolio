import React, { useMemo } from 'react'
import { EyeButton, GithubButton } from '../Proyectos/ProjectsElements';
import { AprendizajeInfo, ArrowsContainer, BackImage, FrontImage, ImagesContainer, InfoContainer, LinksInfoContainer, ProjectScreenWrapper, ResumenInfo, RolInfo, TecnologiasInfo } from './ProjectScreenElements';
import { initialProjects } from '../../data/projectsData'; 
import { useParams, Redirect, Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const ProjectScreen = () => {
    const { pathname } = useLocation();
    const [imageCharge, setImageCharge] = useState(false);

    const prevOrNext = () => {
        setImageCharge(false);
    };

    useEffect(() => {
        setImageCharge(true)
    }, [ pathname ]);

    const findProjects = (titleProject?: string) => {
        return initialProjects.find( project => project.title.toLowerCase() === titleProject);
    }
    
    const { titleProject } = useParams<{titleProject?: string}>();
    const oneProject = useMemo(() => (findProjects(titleProject)), [titleProject]);
    if ( !oneProject ) {
        return <Redirect to="/" />
    }
    const { title, summary, gitHub, webLink, rol, technologies, image, learning, image2, anterior, siguiente } = oneProject;

    return (
        <>
        <Navbar projectPage={true}/>
        <ProjectScreenWrapper>
            <h1>{title}</h1>
            <ImagesContainer>
            {
                imageCharge?
                (
                    <>
                <BackImage className="animate__animated animate__bounceInLeft animate__fast" src={image2} />
                <FrontImage className="animate__animated animate__bounceInRight animate__fast" src={image} />
                    </>
                )
                :
                null
            }
            </ImagesContainer>
            <InfoContainer>
                <ResumenInfo>
                    <h3>Resumen</h3>
                    <p>{summary}</p>
                </ResumenInfo>
                <TecnologiasInfo>
                    <h3>Tecnologías</h3>
                    <p>{technologies}</p>
                </TecnologiasInfo>
                <AprendizajeInfo>
                    <h3>Aprendizaje</h3>
                    <p>{learning}</p>
                </AprendizajeInfo>
                <RolInfo>
                    <h3>Rol</h3>
                    <p>{rol}</p>
                </RolInfo>
                <LinksInfoContainer>
                    <div>
                        <GithubButton  href={gitHub} target="_blank" rel="noreferrer" ><img src="/assets/github-brands.svg" alt="github"></img></GithubButton>
                        <p>GitHub</p>
                    </div>
                    <div>
                        <EyeButton href={webLink} target="_blank" rel="noreferrer" ><img src="/assets/eye-solid.svg" alt="web"></img></EyeButton>
                        <p>Demo</p>
                    </div>
                </LinksInfoContainer>
            </InfoContainer>
            <ArrowsContainer>
                {
                    anterior?
            <Link style={{textDecoration: "none"}} to={`/${anterior}`} onClick={prevOrNext}>
                <div>
            <img src="/assets/Flecha-anterior.png" alt="flecha-anterior"/>
            <p>Anterior</p>
                </div>
            </Link>
            :
            null
                }
                {
                    siguiente?
            <Link style={{textDecoration: "none"}} to={`/${siguiente}`} onClick={prevOrNext}>
                <div>
            <p>Siguiente</p>
            <img src="/assets/Flecha-Siguiente.png" alt="flecha-siguiente"/>
                </div>
            </Link>
            : null
                }
            </ArrowsContainer>
        </ProjectScreenWrapper>
        </>
    )
}

export default ProjectScreen;
