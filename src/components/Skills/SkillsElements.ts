import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colorsVar } from '../../styles/GlobalStyle';
import { responsiveSize } from '../../styles/GlobalStyle';

const {mobileSmall, mobile, tabletSmall, tablet, laptopSmall} = responsiveSize;

interface SkillsProps{
    readonly color: string;
}

export const leftToRight = keyframes`
    0% {
        transform: scale(0, 1)
    }

    100% {
        transform: scale(1, 1);
    }
`

export const SkillsWrapper = styled.section`
    align-items: center;
    background-color: ${colorsVar.primaryColor};
    display: flex;
    justify-content: center;
    width: 100%;
`

export const SkillsContainer = styled.div`  
    display: grid;
    gap: 20px;
    grid-row-gap: 55px;
    grid-template-columns: repeat(4, minmax(178px, 1fr));
    justify-items: center;
    max-width: 1055px;
    margin-top: 60px;
    /* border: 2px solid red; */
    width: 80%;

    @media only screen and (${laptopSmall}) {
        grid-template-columns: repeat(3, minmax(178px, 1fr));
    }

    @media only screen and (${tablet}) {
        grid-template-columns: repeat(2, minmax(178px, 1fr));
        width: 60%;
    }

    @media only screen and (${tabletSmall}) {
        grid-template-columns: repeat(2, minmax(155px, 1fr));
        width: 80%;
        grid-column-gap: 5px;
    }

    @media only screen and (${mobileSmall}) {
        width: 90%;
    }

    `

export const SkillCard = styled.div`
    align-items: center;
    background-color: ${colorsVar.secondaryColor};
    border-radius: 20px;
    box-shadow: ${colorsVar.cardShadow};
    display: flex;
    flex-direction: column;
    height: 178px;
    position: relative;
    width: 178px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: ${colorsVar.hoverCardShadow};
        transform: scale(1.02);
        div {
           transform: scale(1, 1);
           animation: ${leftToRight} 0.4s ease-in;
           animation-fill-mode: forwards;
        }
    }

    img {
        max-width: 84px;
        padding-top: 20px;

        @media only screen and (${mobile}) {
            max-width: 60px;
        }
    }

    p {
        color: ${colorsVar.hero.heroTabText};
        font-size: 18px;
        position: absolute;
        top: 130px;
        text-transform: uppercase;

        @media only screen and (${mobile}) {
            font-size: 16px;
            top: 100px;
        }
    }

    @media only screen and (${mobile}) {
        height: 140px;
        width: 140px;
    }
`

export const HoverBar = styled.div<SkillsProps>`
    content: "";
    background-image: ${props => props.color};
    width: 100%;
    height: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 20px 20px;
    transform-origin: 1% 100%;
    transition: transform 0.5s ease;
    transform: scale(0, 1);

    &.open {
            transform: scale(1, 1);
           animation: ${leftToRight} 0.4s ease-in 0s;
           animation-fill-mode: forwards;
    }
`