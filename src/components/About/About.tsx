import React from 'react'
import Skills from '../Skills/Skills';
import { AboutWrapper, AboutContainer, AboutTitle, AboutDescription } from './AboutElements';

const About = () => {
    return (
        <AboutWrapper id="about">
            <AboutContainer>
                <AboutTitle>
            <h2>Sobre <span>mí</span></h2>
                </AboutTitle>
            <AboutDescription>
                <p>Desarrollador Front-end autodidacta, gran motivación para conocer nuevas tecnologías y herramientas que me permitan crear y participar en proyectos cada vez mas desafiantes. Disfruto del trabajo en equipo y aprender constantemente.</p>
                <div></div>
            </AboutDescription>
            </AboutContainer>
            <Skills/>
        </AboutWrapper>
    )
}

export default About;
