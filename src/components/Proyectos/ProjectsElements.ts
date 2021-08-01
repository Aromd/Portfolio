import styled from "styled-components";
import { SkillsWrapper } from '../Skills/SkillsElements';
import { colorsVar, fontsVar } from '../../styles/GlobalStyle';

interface CardProps {
    readonly bgImage: string;
    readonly padding: string;
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
    width: 721px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const ProjectCard = styled.div<CardProps>`
    margin: 0px 0px 0px ${props => (props.padding === "right")? 45 : -45}px;
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

`

export const LineBackground = styled.div`
    content: "";
    width: 1px;
    height: 91%;
    background-image:${colorsVar.secondGradient};
    opacity: 55%;
    position: absolute;
    bottom: 44px;
`
export const LineBackgroundTwo = styled(LineBackground)`
    height: 95%;
    left: 59px;
    top: 0;
`

export const LineBackgroundThree = styled(LineBackgroundTwo)`
    left: auto;
    right: 59px;
`