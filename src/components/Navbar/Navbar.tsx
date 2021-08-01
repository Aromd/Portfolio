import React from "react";
import { Nav, Logo, NavLinksContainer, NavLinks } from "./NavbarElements";

const Navbar: React.FC = () => {

    return (
        <>
          <Nav>
            <Logo>
              <NavLinks to="home" smooth={true} duration={1500}>
                <img src="/assets/logo_JD.svg" alt="LogoJotaDe" />
                </NavLinks>
            </Logo>
            <NavLinksContainer>
              <ul>
                <li><NavLinks to='home' smooth={true} duration={1500} spy={true} offset={-80}>Inicio<div></div></NavLinks></li>
                <li><NavLinks to='about' smooth={true} duration={1500} spy={true} offset={-80}>About<div></div></NavLinks></li>
                <li><NavLinks to='projects' smooth={true} duration={1500} spy={true} offset={40}>Proyectos<div></div></NavLinks></li>
                <li><NavLinks to='contact' smooth={true} duration={1500} spy={true} offset={40}>Contacto<div></div></NavLinks></li>
                
              </ul>
            </NavLinksContainer>
          </Nav>
        </>
    )
}

export default Navbar;
