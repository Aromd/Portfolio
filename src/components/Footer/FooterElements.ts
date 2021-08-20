import styled from 'styled-components';
import { colorsVar, fontsVar, responsiveSize } from '../../styles/GlobalStyle';

const { mobile } = responsiveSize;

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colorsVar.primaryColor};
    width: 100%;
`
export const FooterContainer = styled.div`
    margin-top: 188px;
    height: 97px;
    width: 100%;
    max-width: 874px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;

    @media only screen and (${mobile}) {
        margin-top: 155px;
    }
`

export const LinksContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    color: white;

    a {
        text-decoration: none;
        color: white;
        text-align: center;
        padding: 4px;
        cursor: pointer;
        font-family: ${fontsVar.text};
        
        &:hover {
            color: ${colorsVar.hero.heroTabText};
        }
    }
`

export const CopyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 14px;

    p{
        color: ${colorsVar.hero.heroTabText};
        cursor: pointer;
    }

`