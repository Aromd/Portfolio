import React from 'react'
import { CopyContainer, FooterContainer, FooterWrapper, LinksContainer } from './FooterElements';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
            <LinksContainer>
            <a href="https://linkedin.com/in/javier-díaz-76bbb0137" target="blank">Linkedin</a>
            <a href="https://github.com/Aromd" target="blank">Github</a>
            <a href="https://twitter.com/Javier95Diaz" target="blank">Twitter</a>
            </LinksContainer>
            <CopyContainer>
            <p>Diseño y desarrollo por Javier Diaz</p>
            </CopyContainer>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer;
