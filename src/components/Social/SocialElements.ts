import styled from 'styled-components';
import { colorsVar } from "../../styles/GlobalStyle";

export const SocialWrapper = styled.div`
    position: fixed;
    right: 60px;
    bottom: 0;
    height: 357px;
    width: 60px;
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;
    z-index: 999;

    i {
        font-size: 35px;
        color: ${colorsVar.hero.heroTabText};
        cursor: pointer;
        transition: all 0.25s ease-out;
        
        &:hover {
            font-size: 55px;
        }
    }
`

export const LineSocial = styled.div`
    content: "";
    height: 142px;
    background-color: ${colorsVar.hero.heroTabText};
    width: 1px;
`