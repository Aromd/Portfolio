import React from 'react';
import Skills from '../Skills/Skills';
import { PrimaryButton } from '../ui/ButtonElements';
import { AboutWrapper, AboutContainer, AboutTitle, AboutDescription, ProfilePicture } from './AboutElements';

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
                <PrimaryButton colorType="contact" style={{marginTop: "10px" }}>Descargar CV</PrimaryButton>
                </div>
            </AboutDescription>
            </AboutContainer>
            <Skills/>
        </AboutWrapper>
    )
}

export default About;
