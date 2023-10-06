import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Profile from './Profile';
import { useTranslation } from "react-i18next";

const HeaderContainer = styled.div`
    height: 10vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    
    padding: .5rem 2rem;
`
const HeaderSize = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LinkToHome = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
`
const TitleProfile = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #d6d4d4;
`
const DescProfile = styled.div`
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: .9rem;
        color: #6b6b6b;
        overflow: hidden;
        position: relative;
        display: inline-block;
        &::before, &::after {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
        }
        &::after {
            content: attr(data-replace);
            height: 100%;
            top: 0;
            transform-origin: 50% 100%;
            transform: translate3d(0, 100%, 0);
            transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
            color: #6b6b6b;
        }
        &:hover::before {
            transform-origin: 50% 50%;
            transform: scaleY(0);
        }
        &:hover::after {
            transform: translate3d(0, 0, 0);
        }
        span {
            display: inline-block;
            transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        }
        &:hover span {
            transform: translate3d(0, 100%, 0);
        }
    }
`
const MenuHamburger = styled.div`
  cursor: pointer;

  padding: 3px 5px 0px 5px;
  border-radius: 10px;
  z-index: 999;
  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto 0px auto;
    transition: all 0.3s ease-in-out;
    background-color: #cccaca;
    &:nth-child(1) {
      transform: translateY(${props => (props.open ? '8px' : '0')}) rotate(${props => (props.open ? '45deg' : '0')});
    }

    &:nth-child(2) {
      opacity: ${props => (props.open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: translateY(${props => (props.open ? '-8px' : '0')}) rotate(${props => (props.open ? '-45deg' : '0')});
    }
  }
`;
const Header = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHeader, setShowHeader] = useState(windowWidth <= 1024);
  const [showProfile, setShowProfile] = useState(false); // Estado para controlar a exibição do perfil

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowHeader(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = () => {
      if (showProfile) {
        setShowProfile(true);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showProfile]);

    return (
      <div>
        {showHeader && (
          <HeaderContainer>
            <HeaderSize>
              <LinkToHome href="/">
                <div>
                  <TitleProfile>Henrique Pinheiro</TitleProfile>
                  <DescProfile>
                    <h3 href="#" data-replace="Freelancer"><span>{t('profile.developer')}</span></h3>
                  </DescProfile>
                </div>
              </LinkToHome>
              <MenuHamburger open={isOpen} onClick={() => { toggleMenu(); toggleProfile(); }}>
                <span></span>
                <span></span>
                <span></span>
              </MenuHamburger>
            </HeaderSize>
          </HeaderContainer>
        )}
         {showProfile && <Profile showProfile={showProfile} />}
      </div>
    );
  };

export default Header