import React, { Suspense } from 'react';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
// import Projects from './components/Proyectos/Projects';
// import Skills from './components/Skills/Skills';
import Social from '../Social/Social';
const About = React.lazy(() => import('../About/About'));
const Projects = React.lazy(() => import('../Proyectos/Projects'));
const Contact = React.lazy(() => import ('../Contact/Contact'));



const LandingScreen = () => {
    return (
        <>
            <Navbar projectPage={false} />
            <Social />
            <Hero />
            <Suspense fallback={null}>
            <About />
            <Projects />
            <Contact />
            </Suspense>
        </>
    )
}

export default LandingScreen;
