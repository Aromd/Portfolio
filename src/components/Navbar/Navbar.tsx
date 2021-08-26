import React from "react";
import { Nav, Logo, NavLinksContainer, NavLinks } from "./NavbarElements";
import { Link } from 'react-router-dom';
import { useMedia } from "../../hooks/useMedia"; 
import { Link as NavLinkOne } from 'react-scroll';

interface NavProps {
  projectPage: boolean;
}

const Navbar: React.FC<NavProps> = ({projectPage}) => {

    const[isNarrowScreen] = useMedia(700);

    return (
        <>
          <Nav>
            <Logo>
              {
            (!projectPage && isNarrowScreen)?
                <NavLinkOne to="home" smooth={true} duration={1500} spy={true} offset={-80}>
                  <img src="/assets/logo_JD.svg" alt="LogoJotaDe" />
                </NavLinkOne>
                :
              <Link to="/">
                <img src="/assets/logo_JD.svg" alt="LogoJotaDe" />
                </Link>
              }
            </Logo>
            {
              (!projectPage && !isNarrowScreen)?
                (
            <NavLinksContainer>
              <ul>
                <li><NavLinks to='home' smooth={true} duration={1500} spy={true} offset={-80}>Inicio<div></div></NavLinks></li>
                <li><NavLinks to='about' smooth={true} duration={1500} spy={true} offset={-80}>About<div></div></NavLinks></li>
                <li><NavLinks to='projects' smooth={true} duration={1500} spy={true} offset={40}>Proyectos<div></div></NavLinks></li>
                <li><NavLinks to='contact' smooth={true} duration={1500} spy={true} offset={40}>Contacto<div></div></NavLinks></li>
              </ul>
            </NavLinksContainer>
                )
                :
                null
              }
          </Nav>
        </>
    )
}

export default Navbar;
