import React, { useMemo, useEffect } from 'react'
import { EyeButton, GithubButton } from '../Proyectos/ProjectsElements';
import { AprendizajeInfo, ArrowLeft, ArrowRight, ArrowsContainer, BackImage, FrontImage, ImagesContainer, InfoContainer, LinksInfoContainer, ProjectScreenWrapper, ResumenInfo, RolInfo, SmallArrowLeft, SmallArrowRight, TecnologiasInfo } from './ProjectScreenElements';
import { initialProjects } from '../../data/projectsData'; 
import { useParams, Redirect, Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useMedia } from '../../hooks/useMedia';

const ProjectScreen = () => {
    const { pathname } = useLocation();
    const [imageCharge, setImageCharge] = useState(false);

    //matchmedia
    const [isNarrowScreen] = useMedia(600);
    
    //
    const prevOrNext = () => {
        setImageCharge(false);
    };

    //cargar imagenes cada vez que se cambia la url
    useEffect(() => {
        setImageCharge(true);
    }, [ pathname ]);

    
    //"fetch" de proyectos
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
            <ImagesContainer style={{height:`${(!image2)? "auto": "474px"}`}}>
            {
                imageCharge?
                (
                    <>
                <BackImage className={`${isNarrowScreen ? "" : "animate__animated animate__bounceInLeft animate__fast"}`} src={image2} />
                {
                    image2?
                    <FrontImage className={`${isNarrowScreen ? "" : "animate__animated animate__bounceInRight animate__fast"}`} src={image} imageTwo={true}/>
                    :
                    <FrontImage style={{position: "relative", maxHeight: "100%"}} className={`${isNarrowScreen ? "" : "animate__animated animate__bounceInRight animate__fast"}`} src={image} imageTwo={false}/>
                }
                    </>
                )
                :
                null
            }
            </ImagesContainer>
            <InfoContainer>
                <ResumenInfo>
                    <h3>Resumen</h3>
                    <p style={{ whiteSpace: "pre-wrap"}}>{summary}</p>
                </ResumenInfo>
                <TecnologiasInfo>
                    <h3>Tecnologías</h3>
                    <p style={{ whiteSpace: "pre-wrap"}}>{technologies}</p>
                </TecnologiasInfo>
                <AprendizajeInfo>
                    <h3>Aprendizaje</h3>
                    <p style={{ whiteSpace: "pre-wrap"}}>{learning}</p>
                </AprendizajeInfo>
                <RolInfo>
                    <h3>Rol</h3>
                    <p style={{ whiteSpace: "pre-wrap"}}>{rol}</p>
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
            <ArrowLeft src="/assets/Flecha-anterior.png" alt="flecha-anterior"/>
            <SmallArrowLeft src="/assets/SmallArrowLeft.svg" alt="flecha-pequeña-anterior"/>
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
            <SmallArrowRight src="/assets/SmallArrowRight.svg" alt="flecha-pequeña-siguiente"/>
            <ArrowRight src="/assets/Flecha-Siguiente.png" alt="flecha-siguiente"/>
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
