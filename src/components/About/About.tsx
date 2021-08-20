import React from 'react';
import Skills from '../Skills/Skills';
import { PrimaryButton } from '../ui/ButtonElements';
import { AboutWrapper, AboutContainer, AboutTitle, AboutDescription, ProfilePicture } from './AboutElements';
import cvPortfolio from '../../data/JavierDiazCvPortfolio.pdf'

const About = () => {
    return (
        <AboutWrapper id="about">
            <AboutContainer>
                <AboutTitle>
            <h2>Sobre <span>mí</span></h2>
                </AboutTitle>
            <AboutDescription>
                <p>
                    Hola! Mi nombre es Javier, soy desarrollador front-end autodidacta, vivo en Buenos Aires. <br/> Disfruto de aprender constantemente sobre desarrollo web y temas relacionados. Me encanta participar en nuevos proyectos y trabajar en equipo.
                    <br/>
                    <br/>
                    <br/>
                    <span>Actualmente utilizo estas herramientas:</span>
                </p>
                <div>
                <ProfilePicture/>
                <a href={cvPortfolio} target="_blank" rel="noreferrer"><PrimaryButton colorType="contact" style={{marginTop: "30px" }}>Descargar CV</PrimaryButton></a>
                </div>
            </AboutDescription>
            </AboutContainer>
            <Skills/>
        </AboutWrapper>
    )
}

export default About;
