import styled from "styled-components";
import { SkillsWrapper } from '../Skills/SkillsElements';
import { colorsVar, fontsVar, responsiveSize } from '../../styles/GlobalStyle';
import { Link as LinkR } from 'react-router-dom';

const { laptopSmall, tablet, tabletSmall, mobile, mobileSmall} = responsiveSize;

interface CardProps {
    readonly bgImage?: string;
    readonly padding: string;
}

interface linesProps {
    readonly buttonView: boolean;
}

interface LinksProps {
    projectID: number;
}

export const ProjectsWrapper = styled(SkillsWrapper)`
/* border: 2px solid red; */
`

export const ProjectsContainer = styled.div`
    align-items: center;
    /* border: 0.5px solid red; */
    display: flex;
    flex-direction: column;
    margin-top: 205px;
    width: 72.92%;
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
    /* width: fit-content; */
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const ProjectCardContainer = styled.div`
    //TODO border: 2px solid blue;
    position: relative;
    width: 100%;
    display: flex;
`

export const ProjectCard = styled.div<CardProps>`
    margin: 0px 0px 0px ${props => (props.padding === "right")? "45px" : "0px"};
    position: relative;
    width: 672px;
    height: 332.85px;
    border-radius: 15px;
    background-image: ${colorsVar.secondGradient}, url(${props => props.bgImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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

    @media only screen and (${laptopSmall}) {
            width: 572px;
    }

    @media only screen and (${tablet}) {
        margin-left: 0px;

        &.active{
            margin-left: 0px;
        }
    }

    @media only screen and (${tabletSmall}) {
        width: 472px;
        height: 275px;

        p {
            font-size: 45px;
        }
    }

    @media only screen and (${mobile}) {
        width: 365px;
        height: 240px;
    }

    @media only screen and (${mobileSmall}) {
        width: 318px;
        height: 158px;

        p {
            display: none;
        }
    }
`

export const InfoCard = styled.div<CardProps>`

    width: 630px;
    min-height: 275px;
    background-color: ${colorsVar.secondaryColor};
    z-index: 5;
    position: absolute;
    top: 50px;
    right: 0px;
    ${props => (props.padding ==="right")? "left: 0px" : "right: 0px"};
    display: none;
    transition: display 0.5 ease-out;
    box-shadow: ${colorsVar.cardShadow};
    border-radius: 8px;

    p {
        color: white;
        padding: 0 20px;
    }

    &.active {
        display: flex;
    }

    @media only screen and (${laptopSmall}) {

        &.active {
            width: 530px;
        }
    }

    @media only screen and (${tablet}) {
        ${props => (props.padding ==="right")? "left: 20px" : "right: 20px"};

        &.active {
            top: -25px;
        }
    }

    @media only screen and (${tabletSmall}) {
        width: 450px;
        left: 0;
        min-height: 225px;

        p {
            font-size: 15px;
        }

        &.active {
            width: 400px;
        }
    }

    @media only screen and (${mobile}) {
        width: 300px;

        &.active {
            width: 30px;
        }
    }

    @media only screen and (${mobileSmall}) {

        &.active {
            display: none;
        }
    }
`
export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    p {
        font-size: 50px;
        font-weight: bold;
    }


    @media only screen and (${tabletSmall}) {
        p {
            display: none;
        }

        h3 {
            font-size: 40px;
        }
    }
`

export const InfoCardWrapper = styled.div`
    /* border: 2px solid red; */
    /* height: 500px; */
    width: 100%;
    display: grid;
`

export const TechnoParagraph = styled.p`
    text-transform: uppercase;
    color: black;
    padding: 0 20px;
`

export const LinksContainerProjects = styled.div<LinksProps>`
    display: grid;
    grid-template-columns: ${props => (props.projectID! < 5)? "1fr 1fr 1fr" : "1fr 1fr"};
    justify-items: center;
    align-items: center;
    width: 100%;
    background-image: ${colorsVar.secondGradient};
    border-radius: 0 0 8px 8px;
    padding: 5px 0px;
    
    a {
        text-decoration: none;
        font-family: ${fontsVar.text};
        color: white;
        transition: all 0.3s ease;

        &:hover {
        transform: scale(1.2);
        }
    }

`

export const GithubButton = styled.a`
    width: 31px;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.2);
    }
`

export const EyeButton = styled.a`
    width: 35px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }
`

export const SeeMoreButton = styled(LinkR)`
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
`
export const LineBackground = styled.div<linesProps>`
    content: "";
    width: 1px;
    height: ${props => (props.buttonView === true)? "91%" : "80%"};
    background-image:${colorsVar.secondGradient};
    opacity: 55%;
    position: absolute;
    bottom: ${props => (props.buttonView === true)? "44px" : "300px"};

    @media only screen and (${mobile}) {
        display: none;
    }
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