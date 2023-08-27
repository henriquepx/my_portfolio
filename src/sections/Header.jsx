import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Profile from './Profile';

const HeaderContainer = styled.div`
    height: 10vh;
    width: 100%;

    background-color: #1a1a1a;
    

    padding: 1rem 2rem;
    @media (max-width: 1024px) {
      padding: 1rem;
    }
`
const HeaderSize = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ProfileApresentation = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 1rem;
`
const ImgProfile = styled.img`
    border-radius: 50%;
    width: 3%;
`
const TitleProfile = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #d6d4d4;
`
const DescProfile = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    color: #6b6b6b;
`
const MenuHamburger = styled.div`
  cursor: pointer;

  border: 1px solid #d6d4d4;
  padding: 3px 5px;
  border-radius: 10px;
  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
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
    const handleOutsideClick = (event) => {
      if (showProfile && !event.target.closest(".ProfileContainer")) {
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
              <ProfileApresentation>
                <ImgProfile src="profile.jpeg" alt="Foto profile do Henrique" />
                <div>
                  <TitleProfile>Henrique Pinheiro</TitleProfile>
                  <DescProfile>Desenvolvedor Front-end</DescProfile>
                </div>
              </ProfileApresentation>
              <MenuHamburger open={isOpen} onClick={() => { toggleMenu(); toggleProfile(); }}>
                <span></span>
                <span></span>
                <span></span>
              </MenuHamburger>
            </HeaderSize>
          </HeaderContainer>
        )}
         {showProfile && <Profile />}
      </div>
    );
  };

export default Header