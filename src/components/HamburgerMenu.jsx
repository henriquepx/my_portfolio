import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

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
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: #568d87;
    transition: opacity 0.3s, transform 0.3s;
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'translateY(8px) rotate(45deg)' : 'none')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'translateY(-8px) rotate(-45deg)' : 'none')};
    }
  }
`;
const Menu = styled.ul`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  z-index: 888;
  width: 300px;
  height: 250px;
  background-color: #6cc2b8;
  right: 50px;
  top: 20px;
  transition: opacity 0.4s;
  &.menu-enter {
    animation: ${fadeIn} 300ms both;
  }

  &.menu-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.menu-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: opacity 300ms, transform 300ms;
  }
`;
const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 3rem 2rem 0rem 2rem;
`;
const NavMenuContent = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`
const LinksNavMenuContent = styled.a`
  color: #037a6c;
  font-size: 1.3rem;
  font-family: 'Belanosima', sans-serif;
`
const SocialMediasHeader = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 2rem;
  border-top: 1px solid white;
  a {
    color: #037a6c;
    font-size: 1.6rem;
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
          <SocialMediasHeader>
            <a href="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer'>
              <BsLinkedin />
            </a>
            <a href="https://github.com/henriquepx" target='_blank' rel='noreferrer'>
              <BsGithub />
            </a>
            <a href="mailto:henriquepinheiroxavier@gmail.com" target='_blank' rel='noreferrer'>
              <BsFillEnvelopeFill /> 
            </a>
          </SocialMediasHeader>
        </MenuContent>
      </Menu>
      </CSSTransition>
    </div>
  );
};

export default HamburgerMenu;
