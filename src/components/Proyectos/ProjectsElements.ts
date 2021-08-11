import styled from "styled-components";
import { SkillsWrapper } from '../Skills/SkillsElements';
import { colorsVar, fontsVar } from '../../styles/GlobalStyle';
import { Link as LinkR } from 'react-router-dom';

interface CardProps {
    readonly bgImage?: string;
    readonly padding: string;
}

interface linesProps {
    readonly buttonView: boolean;
}

export const ProjectsWrapper = styled(SkillsWrapper)`
/* border: 2px solid red; */
`

export const ProjectsContainer = styled.div`
    align-items: center;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    margin-top: 205px;
    width: 100%;
    max-width: 1055px;
    position: relative;
`
export const TitleContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 71px;
    width: 100%;

    h2{
        z-index: 5;
    }

    h2::after{
        position: absolute;
        content: "";
        background-image: ${colorsVar.secondGradient};
        width: 100%;
        max-width: 725px;
        height: 5px;
        left: 0px;
        top: 35px;
        z-index: -1;
    }
`

export const CardsContainer = styled.div`
    position: relative;
    margin-top: 80px;
    /* border: 2px solid red; */
    /* width: 721px; */
    width: fit-content; 
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const ProjectCardContainer = styled.div`
    /* border: 2px solid blue; */
    position: relative;
    width: 100%;
    display: flex;
`

export const ProjectCard = styled.div<CardProps>`
    margin: 0px 0px 0px ${props => (props.padding === "right")? 45 : 0}px;
    position: relative;
    width: 672px;
    height: 332.85px;
    border-radius: 15px;
    background-image: ${colorsVar.secondGradient}, url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 80px;
    box-shadow: ${colorsVar.cardShadow};
    z-index: 3;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.009);
        box-shadow: ${colorsVar.hoverCardShadow};
    }

    p {
        position: absolute;
        top: 30px;
        right: 30px;
        font-size: 60px;
        color: white;
        font-family: ${fontsVar.title};
        font-weight: bold;
    }

    h3 {
        align-self: center;
        text-shadow: 0px 14.3889px 28.7778px rgba(0, 0, 0, 0.25);
    }

    &.active {
        margin-left: ${props => (props.padding ==="right")? "320px" : ""};
        background-image: url(${props => props.bgImage});

        h3 {
            display: none;
        }

        p {
            display: none;
        }
    }

`

export const InfoCard = styled.div<CardProps>`
    width: 630px;
    height: 250px;
    padding: 10px;
    background-color: ${colorsVar.secondaryColor};
    z-index: 5;
    position: absolute;
    top: 55px;
    right: 0px;
    ${props => (props.padding ==="right")? "left: 0px" : "right: 0px"};
    display: none;
    transition: display 0.5 ease-out;
    box-shadow: ${colorsVar.cardShadow};
    border-radius: 4px;

    p {
        color: white;
    }

    &.active {
        display: flex;
    }
`

export const InfoCardWrapper = styled.div`
    /* border: 2px solid red; */
    width: 100%;
    margin: 0 20px 0 20px;
    display: grid;
`

export const TechnoParagraph = styled.p`
    text-transform: uppercase;
    /* background-color: ${colorsVar.primaryColor}; */
    color: black;
    /* text-align: center; */
`

export const GithubButton = styled.a`
    width: 31px;
`

export const EyeButton = styled.a`
    width: 35px;
`

export const LineBackground = styled.div<linesProps>`
    content: "";
    width: 1px;
    height: ${props => (props.buttonView === true)? "91%" : "80%"};
    background-image:${colorsVar.secondGradient};
    opacity: 55%;
    position: absolute;
    bottom: ${props => (props.buttonView === true)? "44px" : "300px"};
`

export const LinksContainerProjects = styled.div`
    display: flex;
    /* border: 2px solid red; */
    justify-content: center;
    align-items: center;
    width: 100%;

    a {
        text-decoration: none;
        font-family: ${fontsVar.text};
        color: white;
        margin-left: 10px;
        &:hover {
            color: ${colorsVar.hero.heroTabText};
        }
    }

`

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
        font-size: 50px;
        font-weight: bold;
    }
`

export const SeeMoreButton = styled(LinkR)`
    font-size: 20px;
    text-align: center;
`

export const LineBackgroundTwo = styled(LineBackground)`
    height: 95%;
    left: 59px;
    top: 0;
    bottom: 44px;
`
export const LineBackgroundThree = styled(LineBackgroundTwo)`
    left: auto;
    right: 59px;
    bottom: 44px;
`