import React, { useState } from 'react';
import TypeWritter from '../../helpers/TypeWritter';
import { HeroWrapper, HeroContainer, TabLine, OpenTab, EmptyTabs, InfoContainer, NumbersContainer, CodeContainer, SecondHeroContainer, DescriptionContainer, LogoContainer } from './HeroElements';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { PrimaryButton } from '../ui/ButtonElements';
import { Link as LinkS } from 'react-scroll';

const Hero: React.FC = () => {

    const [animationStatus, setAnimationStatus] = useState(true);

    const text = "import React from 'react';\nimport { HeroContainer, HeroLogo, HeroTitle, HeroInfo, HeroButton } from './HeroElements';\n\nconst Hero: React.FC = () => {\n    return (\n            <HeroContainer>\n               <HeroLogo/>\n               <HeroTitle> Javier Diaz </HeroTitle>\n               <HeroInfo> Front-end Developer </HeroInfo>\n               <HeroButton> Mis Proyectos </HeroButton>\n            </HeroContainer>\n    )\n}\n\nexport default Hero;";
    // const text = "import React from 'react'; <br/> import { HeroContainer, HeroLogo, HeroTitle, HeroInfo, HeroButton } from './HeroElements'; <br/> const Hero: React.FC = () => { <br/>return ( <br/> <HeroContainer> <br/> <HeroLogo/> <br/> <HeroTitle> Javier Diaz </HeroTitle> <br/> <HeroInfo> Front-end Developer </HeroInfo> <br/> <HeroButton> Mis Proyectos </HeroButton> <br/> </HeroContainer> <br/> <br/> ) <br/> } <br/> <br/> export default Hero;"
    
    return (
                    
        <TransitionGroup component={HeroWrapper} id="home">
            
            {
                animationStatus?
                <CSSTransition key={1} 
                timeout={2000}
                classNames="transition"
                >
                    
                <HeroContainer key={1}>
                <TabLine>
                    <OpenTab><div><i className="fab fa-react"></i> <p>Bienvenida.tsx</p></div></OpenTab>
                    <EmptyTabs/>
                </TabLine>
                <InfoContainer>
                    <NumbersContainer>
                        <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p>
                    </NumbersContainer>
                    <CodeContainer>
                        <TypeWritter text={text} speed={2} tag={"pre"} setAnimationStatus={setAnimationStatus}/>
                    </CodeContainer>
                </InfoContainer>
            </HeroContainer>
            </CSSTransition>

            :
                
            <CSSTransition key={2} timeout={2500} classNames="transition">
            <SecondHeroContainer key={2}>
            <DescriptionContainer>
                <h1>Javier Diaz</h1>
                <p>FRONT-END DEVELOPER</p>
                <LinkS to='projects' smooth={true} duration={1500} spy={true} offset={40}><PrimaryButton colorType="" style={{marginTop: "50px"}}>Mis Proyectos</PrimaryButton></LinkS>
            </DescriptionContainer>
            <LogoContainer>
                {/* <p>JD</p> */}
                <img src="/assets/laptop-hero2.svg" alt="LogoJotaDe" />
            </LogoContainer>
            </SecondHeroContainer>
            </CSSTransition>
        }
        </TransitionGroup>
    )
}

export default Hero;
