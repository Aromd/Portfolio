import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';
import { colorsVar, fontsVar, responsiveSize } from "../../styles/GlobalStyle";

const { mobileSmall } = responsiveSize; 

export const Nav = styled.header`
    background-color: rgba(21, 25, 50, 0.6);
    height: 70px;
    width: 100%;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    backdrop-filter: blur(40px);
    z-index: 999;

`
export const Logo = styled.div`
    cursor: pointer;

    img {
        width: 100px;
    }
`
export const NavLinksContainer = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
            /* border: 2px solid red; */
            margin-left: 20px;
            color: ${colorsVar.hero.heroTabText};
            font-size: 20px;
            padding: 0px 10px;
            list-style-type: none;
            font-family: ${fontsVar.title};
            padding: 5px 20px;
            transition: color 0.2s;
        }
    }
    `

export const NavLinks = styled(LinkS)`
    
    cursor: pointer;

    div {
            height: 2px;
            content:"";
            width: 93%;
            transform: scale(0,1);
            background-color: ${colorsVar.hero.heroTabText};
            transition: transform 0.5s ease;
            transform-origin: 0% 100%;
    }
    
    &:hover {
        color: white;
    }

    &.active {
        
        div {
            transform: scale(1.1)
        }
    }

    @media only screen and (${mobileSmall}) {
        display: none;
    }
    `