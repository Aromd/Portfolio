import React, { useState } from 'react';
import TypeWritter from '../../helpers/TypeWritter';
import { HeroWrapper, HeroContainer, TabLine, OpenTab, EmptyTabs, InfoContainer, NumbersContainer, CodeContainer, SecondHeroContainer, DescriptionContainer, LogoContainer } from './HeroElements';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { PrimaryButton } from '../ui/ButtonElements';

const Hero: React.FC = () => {

    const [animationStatus, setAnimationStatus] = useState(true);

    const text = "import React from 'react';\nimport { HeroContainer, HeroLogo, HeroTitle, HeroInfo, HeroButton } from './HeroElements';\n\nconst Hero: React.FC = () => {\n    return (\n            <HeroContainer>\n               <HeroLogo/>\n               <HeroTitle> Javier Diaz </HeroTitle>\n               <HeroInfo> Front-end Developer </HeroInfo>\n               <HeroButton> Mis Proyectos </HeroButton>\n            </HeroContainer>\n    )\n}\n\nexport default Hero;";
    

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
                        <TypeWritter text={text} setAnimationStatus={setAnimationStatus}/>
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
                <PrimaryButton colorType="" style={{marginTop: "50px"}}>Mis Proyectos</PrimaryButton>
            </DescriptionContainer>
            <LogoContainer>
                <p>JD</p>
                {/* <img src="/assets/logo_JD.svg" alt="LogoJotaDe" /> */}
            </LogoContainer>
            </SecondHeroContainer>
            </CSSTransition>
        }
        </TransitionGroup>
    )
}

export default Hero;
