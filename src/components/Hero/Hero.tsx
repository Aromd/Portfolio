import React from 'react';
// import TypeWritter from '../../helpers/TypeWritter';
import { HeroWrapper, SecondHeroContainer, DescriptionContainer, LogoContainer, SecondHeroWrapper } from './HeroElements';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { PrimaryButton } from '../ui/ButtonElements';
import { Link as LinkS } from 'react-scroll';
// import { useEffect } from 'react';

const Hero: React.FC = () => {

    // const [animationStatus, setAnimationStatus] = useState(true);

    // const [isNarrowScreen, setIsNarrowScreen] = useState(false);
        
    // useEffect(() => {
    //     const mediaWatcher = window.matchMedia("screen and (max-width: 500px)");
    //     setIsNarrowScreen(mediaWatcher.matches);  
        
    //     function updateIsNarrowScreen(e:any) {
    //       setIsNarrowScreen(e.matches);
    //     }
    //     if(mediaWatcher.addEventListener) {
    //       mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    //       return function cleanup() {
    //         mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    //       }
    //     } else {
    //       // backwards compatibility
    //       mediaWatcher.addListener(updateIsNarrowScreen)
    //       return function cleanup() {
    //         mediaWatcher.removeListener(updateIsNarrowScreen)
    //       }
    //     }
    //   }, []);

    // const text = "import React from 'react';\nimport { HeroContainer, HeroLogo, HeroTitle, HeroInfo, HeroButton } from './HeroElements';\n\nconst Hero: React.FC = () => {\n    return (\n            <HeroContainer>\n               <HeroLogo/>\n               <HeroTitle> Javier Diaz </HeroTitle>\n               <HeroInfo> Front-end Developer </HeroInfo>\n               <HeroButton> Mis Proyectos </HeroButton>\n            </HeroContainer>\n    )\n}\n\nexport default Hero;";
    // const text = "import React from 'react'; <br/> import { HeroContainer, HeroLogo, HeroTitle, HeroInfo, HeroButton } from './HeroElements'; <br/> const Hero: React.FC = () => { <br/>return ( <br/> <HeroContainer> <br/> <HeroLogo/> <br/> <HeroTitle> Javier Diaz </HeroTitle> <br/> <HeroInfo> Front-end Developer </HeroInfo> <br/> <HeroButton> Mis Proyectos </HeroButton> <br/> </HeroContainer> <br/> <br/> ) <br/> } <br/> <br/> export default Hero;"
    
    return (
          <HeroWrapper id="home">
            <SecondHeroContainer>
              <SecondHeroWrapper>
              <DescriptionContainer>
                <h1>Javier Diaz</h1>
                <p>FRONT-END DEVELOPER</p>
                <LinkS  style={{width: "fit-content"}} to='projects' smooth={true} duration={1500} spy={true} offset={40}><PrimaryButton colorType="" style={{marginTop: "50px"}}>Mis Proyectos</PrimaryButton></LinkS>
              </DescriptionContainer>
              <LogoContainer>
                <img src="/assets/laptop-hero2.svg" alt="LogoJotaDe" />
              </LogoContainer>
              </SecondHeroWrapper>
            </SecondHeroContainer>
          </HeroWrapper>
        // <TransitionGroup component={HeroWrapper} id="home">
            
        //     {
        //         (animationStatus && isNarrowScreen)?
        //         <CSSTransition key={1} 
        //         timeout={2000}
        //         classNames="transition"
        //         >
                    
        //         <HeroContainer key={1}>
        //         <TabLine>
        //             <OpenTab><div><i className="fab fa-react"></i> <p>Bienvenida.tsx</p></div></OpenTab>
        //             <EmptyTabs/>
        //         </TabLine>
        //         <InfoContainer>
        //             <NumbersContainer>
        //                 <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p>
        //             </NumbersContainer>
        //             <CodeContainer>
        //                 <TypeWritter text={text} speed={2} tag={"pre"} setAnimationStatus={setAnimationStatus}/>
        //             </CodeContainer>
        //         </InfoContainer>
        //     </HeroContainer>
        //     </CSSTransition>

        //     :
                
        //     <CSSTransition key={2} timeout={2500} classNames="transition">
        //     </CSSTransition>
        // }
        // </TransitionGroup>
    )
}

export default Hero;
