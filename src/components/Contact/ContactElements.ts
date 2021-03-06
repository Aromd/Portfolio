import styled from 'styled-components';
import { colorsVar, fontsVar, responsiveSize } from '../../styles/GlobalStyle';
import { TitleContainer } from '../Proyectos/ProjectsElements';
import { SkillsWrapper, leftToRight } from '../Skills/SkillsElements';

const { tabletSmall, mobile, mobileSmall } = responsiveSize;

export const ContactWrapper = styled(SkillsWrapper)`
`

export const ContactContainer = styled.div`
    margin-top: 205px;
    width: 72.92%;
    max-width: 874px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 2px solid red; */
    
    @media only screen and (${mobile}) {
        margin-top: 125px;
    }

    @media only screen and (${mobileSmall}) {
        width: 87%;
    }
`

export const ContactTitle = styled(TitleContainer)`
    h2::after{
        background-image: ${colorsVar.firstGradient};
        right: 0px;
        left: auto;
    }
`

export const FormContainer = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 512px;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        font-size: 24px;
        font-family: ${fontsVar.text};
    }

    @media only screen and (${tabletSmall}){
        height: 612px;
    }

    @media only screen and (${mobileSmall}){
        label {
            font-size: 22px;
        }
    }
`

export const NameInput = styled.div`
    font-family: ${fontsVar.text};
    max-width: 349px;
    width: 48%;
    height: 91px;
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    /* border: 2px solid red; */

    &:focus-within {
        div {
        transform: scale(1, 1);
           animation: ${leftToRight} 0.4s ease-in;
           animation-fill-mode: forwards;
        }
    }

    input {
        background-color: ${colorsVar.secondaryColor};
        color: ${colorsVar.hero.heroTabText};
        outline: none;
        border: none;
        height: 46px;
        font-size: 18px;
        margin-top: 10px;
        padding: 0 10px;
        border-radius: 4px;

        ::placeholder {
            opacity: 60%;
        }
    }

    div {
        position: absolute;
        width: 100%;
        height: 5px;
        background-image: ${colorsVar.firstGradient};
        bottom: 0;
        border-radius: 0 0 4px 4px;
        transform-origin: 0% 100%;
        transition: transform 0.5s ease;
        transform: scale(0, 1);
    }

    @media only screen and (${tabletSmall}){
        width: 100%;
        max-width: 100%;
        position: relative;
    }
`

export const EmailInput = styled(NameInput)`
    left: auto;
    right: 0;

    @media only screen and (${tabletSmall}){
        margin-top: 20px;
    }
`

export const MessageInput = styled.div`
    width: 100%;
    /* max-width: 874px; */
    height: 294px;
    position: absolute;
    top: 131px;
    display: flex;
    flex-direction: column;

    &:focus-within {
        div {
        transform: scale(1, 1);
           animation: ${leftToRight} 0.4s ease-in;
           animation-fill-mode: forwards;
        }
    }
    
    textarea{
        background-color: ${colorsVar.secondaryColor};
        color: ${colorsVar.hero.heroTabText};
        outline: none;
        border: none;
        resize: none;
        width: 100%;
        /* height: 249px; */
        font-size: 20px;
        margin-top: 10px;
        padding: 10px 10px;
        border-radius: 4px;
        font-family: ${fontsVar.text};

        ::placeholder {
            opacity: 60%;
        }

        @media only screen and (${mobile}) {
        font-size: 18px;
        }
    }

    div {
        position: absolute;
        width: 100%;
        height: 5px;
        background-image: ${colorsVar.firstGradient};
        bottom: 0;
        border-radius: 0 0 4px 4px;
        transform-origin: 0% 100%;
        transition: transform 0.5s ease;
        transform: scale(0, 1);
    }

    @media only screen and (${tabletSmall}){
        margin-top: 80px;
    }

    @media only screen and (${tabletSmall}){
        margin-top: 100px;
    }
`

export const MessageSent = styled.div`
    position: absolute;
    bottom: 60px;
` 