import React, { Suspense } from 'react';

// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
// import Projects from './components/Proyectos/Projects';
// import Skills from './components/Skills/Skills';
import Social from './components/Social/Social';
import GlobalStyle from './styles/GlobalStyle';
// const Skills = React.lazy(() => import('./components/Skills/Skills'));
const About = React.lazy(() => import('./components/About/About'));
const Projects = React.lazy(() => import('./components/Proyectos/Projects'));
const Contact = React.lazy(() => import ('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Social />
            <Hero />
            <Suspense fallback={null}>
            <About />
            {/* <Skills />   */}
            <Projects />
            <Contact />
            <Footer />
            </Suspense>
        </>
    )
}

export default App;
