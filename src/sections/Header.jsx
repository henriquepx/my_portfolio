import styled from 'styled-components';
import { useState, useEffect } from 'react';

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
      transform: translateY(${props => (props.open && props.isFirstSpanTransformed ? '8px' : '0')}) rotate(${props => (props.open && props.isFirstSpanTransformed ? '45deg' : '0')});
    }
    &:nth-child(2) {
      opacity: ${props => (props.open && props.isSecondSpanTransformed ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: translateY(${props => (props.open && props.isThirdSpanTransformed ? '-8px' : '0')}) rotate(${props => (props.open && props.isThirdSpanTransformed ? '-45deg' : '0')});
    }
  }
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstSpanTransformed, setIsFirstSpanTransformed] = useState(false);
  const [isSecondSpanTransformed, setIsSecondSpanTransformed] = useState(false);
  const [isThirdSpanTransformed, setIsThirdSpanTransformed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsFirstSpanTransformed(!isFirstSpanTransformed);
    setIsSecondSpanTransformed(!isSecondSpanTransformed);
    setIsThirdSpanTransformed(!isThirdSpanTransformed);
  };


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showHeader, setShowHeader] = useState(windowWidth <= 1024);
  
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
              <MenuHamburger open={isOpen} isFirstSpanTransformed={isFirstSpanTransformed} isSecondSpanTransformed={isSecondSpanTransformed} isThirdSpanTransformed={isThirdSpanTransformed} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </MenuHamburger>
            </HeaderSize>
          </HeaderContainer>
        )}
      </div>
    );
  };

export default Header