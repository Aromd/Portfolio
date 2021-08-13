import styled from 'styled-components';
import { colorsVar, responsiveSize } from '../../styles/GlobalStyle';
import { TitleContainer } from '../Proyectos/ProjectsElements';

const { mobile } = responsiveSize;

export const AboutWrapper = styled.section`
    align-items: center;
    background-color: ${colorsVar.primaryColor};
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    .transition-enter {
        opacity: 0;
        transform: translate(-900px, 0);
    }

    .transition-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 2500ms ease-in;
    }

    .transition-exit {
        opacity: 1;
        transform: translate(-900, 0);
        margin-left: -1000px;

        @media screen and (max-width: 1300px){
            margin-left: -1000px;
        }
    }

    .transition-exit-active {
        opacity: 0;
        transform: translate(900px, 0);
        transition: all 2000ms ease-in;
    }
`

export const AboutContainer = styled.div`

    align-items: center;
    display: flex;
    flex-direction: column;
    width: 72.92%;
    max-width: 1055px;
    /* border: 2px solid red; */
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
    width: 95%;
    max-width: 991px;
    min-height: 321px;
    justify-content: space-between;
    padding-top: 50px;
    /* border: 2px solid blue; */
    
    div{
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    
    p {
        padding-top: 20px;
        width: 100%;
        max-width: 529px;
        color: ${colorsVar.hero.heroTabText};
        font-size: 20px;
        /* border: 2px solid red; */
    }

    span {
        color: white;
        font-weight: bold;
    }

    @media only screen and (max-width: 1050px) {
        flex-direction: column;
        align-items: center;

        p {
            text-align: center;
        }
        
        span{
            display: none;
        }
    }

    @media only screen and (${mobile}) {
        width: 100%;

        p {
            font-size: 16px;
        }
    }
    `

export const ProfilePicture = styled.div`
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
`