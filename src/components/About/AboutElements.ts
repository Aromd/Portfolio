import styled from 'styled-components';
import { colorsVar } from '../../styles/GlobalStyle';
import { TitleContainer } from '../Proyectos/ProjectsElements';

export const AboutWrapper = styled.section`
    align-items: center;
    background-color: ${colorsVar.primaryColor};
    display: flex;
    flex-direction: column;
    margin-top: 0px;
`

export const AboutContainer = styled.div`

    align-items: center;
    display: flex;
    flex-direction: column;
    width: 72.92%;
    max-width: 1055px;
`
export const AboutTitle = styled(TitleContainer)`
    h2::after{
        background-image: ${colorsVar.firstGradient};
        right: 0px;
        left: auto;
    }
`

export const AboutDescription = styled.div`
    display: flex;
    width: 991px;
    height: 321px;
    justify-content: space-between;
    padding-top: 50px;
    
    div{
        border: 4px solid;
        border-image-source: linear-gradient(116.6deg, #13338F 0%, rgba(123, 32, 231, 1) 53.65%, #FFA3BF 100%);
        border-image-slice: 1;
        border-radius: 5px;
        background-image: linear-gradient(116.6deg, #13338F 0%, rgba(123, 32, 231, 0.4) 53.65%, #FFA3BF 100%), url("/assets/e3702d45482247e0c8165ddc76af7046.webp");
        background-position: center;
        width: 182px;
        height: 177px;
        box-shadow: 2px 6px 10px 0.4px rgba(0, 0, 0, 0.2);
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    p {
        padding-top: 40px;
        width: 529px;
        color: ${colorsVar.hero.heroTabText};
        font-size: 20px;
    }
    `
