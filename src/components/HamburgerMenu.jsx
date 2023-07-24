import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const StyledHamburgerMenu = styled.div`
  cursor: pointer;
  z-index: 999;
  position: relative;
  padding: 0rem 6rem 0rem 0rem;
  span {
    display: block;
    width: 30px;
    height: 5px;
    margin: 5px auto;
    background-color: ${({ open }) => (open ? '#e4e4e4' : '#1a1a1a')};
    transition: opacity 0.3s, transform 300ms;
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'translateY(11px) rotate(45deg)' : 'none')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'translateY(-9px) rotate(-45deg)' : 'none')};
    }
  }
`;
const Menu = styled.ul`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  z-index: 888;
  width: 400px;
  height: 550px;
  background-color: #000000;
  right: 50px;
  padding: 2rem;
  top: 20px;
  transition: opacity 0.4s;
  &.menu-enter {
    animation: ${fadeIn} 150ms both;
  }

  &.menu-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.menu-exit-active {
    opacity: 0;
    transform: scale(0.2);
    transition: opacity 150ms, transform 150ms;
  }
`;
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 3rem 2rem 0rem 1rem;
`;
const NavMenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 1rem;
`
const LinksNavMenuContent = styled.a`
  color: #e4e4e4;
  font-size: 1.3rem;
  font-family: 'Belanosima', sans-serif;
`
const LinkEmailMenu = styled.a`
  color: #e4e4e4;
  font-size: 1.3rem;
  font-family: 'Belanosima', sans-serif;
`
const SocialMediasHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 1rem;
  a {
    color: #e4e4e4;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 5px;
    p {
      font-family: 'Belanosima', sans-serif;
      font-size: 1.2rem;
    }
  }
`
const ContainerChangeTheme = styled.div`
  display: flex;
  gap: 10px;
  a {
    color: #e4e4e4;
    font-size: 1.2rem;
  }
`

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <StyledHamburgerMenu open={isOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </StyledHamburgerMenu>
      <CSSTransition
        in={isOpen}
        timeout={300} // tempo da animação em milissegundos
        classNames="menu"
        unmountOnExit
      >
      <Menu open={isOpen}>
        <MenuContent>
          <NavMenuContent>
            <LinksNavMenuContent href="#">Projects</LinksNavMenuContent>
            <LinksNavMenuContent href="#">Education</LinksNavMenuContent>
            <LinksNavMenuContent href="#">Contact</LinksNavMenuContent>
          </NavMenuContent>
          <LinkEmailMenu href="mailto:henriquepinheiroxavier" target='_blank' rel='noreferrer'>/henriquepinheiroxavier@gmail.com</LinkEmailMenu>
          <SocialMediasHeader>
            <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'>
              <BsLinkedin />
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/henriquepx" target='_blank' rel='noreferrer'>
              <BsGithub />
              <p>Github</p>
            </a>
          </SocialMediasHeader>
          <ContainerChangeTheme>
            <a href="#"><FaMoon /></a>
            <a href="#"><FaSun /></a>
          </ContainerChangeTheme>
        </MenuContent>
      </Menu>
      </CSSTransition>
    </div>
  );
};

export default HamburgerMenu;
