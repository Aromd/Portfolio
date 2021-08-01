import React from 'react'
import { CopyContainer, FooterContainer, FooterWrapper, LinksContainer } from './FooterElements';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
            <LinksContainer>
                <p>Linkedin</p>
                <p>Github</p>
                <p>Twitter</p>
            </LinksContainer>
            <CopyContainer>
            <p>Diseño y desarrollo por Javier Diaz</p>
            </CopyContainer>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer;
