import styled from 'styled-components';
import { colorsVar } from '../../styles/GlobalStyle';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colorsVar.primaryColor};
`
export const FooterContainer = styled.div`
    margin-top: 188px;
    height: 97px;
    width: 874px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
`

export const LinksContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    color: white;

    p {
        text-align: center;
        padding: 4px;
        cursor: pointer;
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
        cursor: pointer;
        color: ${colorsVar.hero.heroTabText};
    }
`