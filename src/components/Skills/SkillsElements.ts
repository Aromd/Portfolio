import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { colorsVar } from '../../styles/GlobalStyle';

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
`

export const SkillsContainer = styled.div`  
    display: grid;
    grid-column-gap: 145px;
    grid-row-gap: 75px;
    grid-template-columns: 1fr 1fr 1fr;
    height: 585px;
    justify-items: center;
    max-width: 1055px;
    margin-top: 60px;
`

export const SkillCard = styled.div`
    align-items: center;
    background-color: ${colorsVar.secondaryColor};
    border-radius: 20px;
    box-shadow: ${colorsVar.cardShadow};
    display: flex;
    flex-direction: column;
    height: 255px;
    position: relative;
    width: 255px;
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
        max-width: 144px;
        padding-top: 20px;
    }

    p {
        color: ${colorsVar.hero.heroTabText};
        font-size: 18px;
        position: absolute;
        top: 200px;
        text-transform: uppercase;
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