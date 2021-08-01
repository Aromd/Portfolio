import styled from 'styled-components';
import { colorsVar, fontsVar } from '../../styles/GlobalStyle';

interface ButtonProps {
    readonly colorType: string;
};

export const PrimaryButton = styled.button<ButtonProps>`
    width: 190px;
    height: 44px;
    background: transparent;
    position: relative;
    border-radius: 22px;
    outline: none;
    border: none;
    cursor: pointer;
    font-family: ${fontsVar.title};
    font-weight: bold;
    font-size: 17px;
    color: white;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-shadow: ${colorsVar.buttonShadow};
    
    &:hover {
        background: ${props => (props.colorType === "contact")? colorsVar.firstGradient :colorsVar.secondGradient};
        color: ${colorsVar.primaryColor};
        box-shadow: ${colorsVar.hoverButtonShadow};
    }
    
    &::before {
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        border-radius:22px; 
        padding:2px; 
        background: ${props => (props.colorType === "contact")? colorsVar.firstGradient :colorsVar.secondGradient};
        mask:linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out; 
        mask-composite: exclude; 
    }
    `