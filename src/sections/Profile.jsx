import styled, { keyframes } from 'styled-components';
import LinkNavegation from '../components/LinkNavegation';
import { FaInfoCircle, FaCode, FaTrophy, FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaDesktop } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import PropTypes from 'prop-types';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const ContainerProfile = styled.div`
    position: relative;
    position: fixed;
    height: 100%;
    width: 18rem;
    left: 0;
    top: 0;
    z-index: 999;

    background-color:#1b1b1b;

    display: flex;
    flex-direction: column;
    padding: 1.7rem;
    
    animation: ${props => props.showProfile ? slideIn : 'none'} 0.3s ease-in-out;
    @media (max-width: 320px) {
        width: 75%;
    }
`
const ImgProfile = styled.img`
    border-radius: 50%;
    width: 15%;
    @media (max-width: 320px) {
        display: none;
    }
`
const TitleProfile = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #f2f2f2;
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
const Nav2 = styled.nav`
    margin-top: .5rem;

    display: flex;
    flex-direction: column;
    
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: .8rem;
        color: #6b6b6b;
        margin-bottom: .5rem;
        margin-left: .7rem;
    }
`
const Language = styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
`
const ChangeLanguage = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #9e9b9b;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    img {
        height: 100%;
        width: 12%;
        cursor: pointer;
        filter: grayscale(100%);
        &:hover {
            filter: grayscale(0%);
        }
    }
`
const LinkToHome = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
`
const Profile = ({ showProfile }) => {

    const { t, i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const handleChangeLanguage = (newLanguage) => {
        if (newLanguage !== currentLanguage) {
            i18n.changeLanguage(newLanguage);
            setCurrentLanguage(newLanguage);
            localStorage.setItem("newLanguage", newLanguage);
        }
    };

  return (
    <ContainerProfile showProfile={showProfile}>
            <LinkToHome href="/">
                <ImgProfile src="profile.jpeg" alt="Foto profile do Henrique" />
                <div>
                    <TitleProfile>Henrique Pinheiro</TitleProfile>
                    <DescProfile>
                        <h3 href="#" data-replace="Freelancer"><span>{t('profile.developer')}</span></h3>
                    </DescProfile>
                </div>
            </LinkToHome>

        <Nav2>
            <h2>{t('profile.sections')}</h2>
            <ul>
                <LinkNavegation
                icon={<FaInfoCircle />}
                name={t('profile.aboutmesections')}
                link="about" 
                />

                <LinkNavegation
                icon={<FaEnvelope />}
                name={t('profile.contactsections')}
                link="footer"
                />
            </ul>
      </Nav2>

      <Nav2>
        <h2>Front-end</h2>
        <ul>
                <LinkNavegation
                icon={<FaCode />}
                name={t('profile.skillssections')}
                link="skills"
                />

                <LinkNavegation
                icon={<FaDesktop />}
                name={t('profile.projectssections')}
                link="projects"
                  />

                <LinkNavegation
                icon={<FaTrophy />}
                name={t('profile.certificatessections')}
                link="certificates"
                isSoon={true}
                />

                  

        </ul>
      </Nav2>

      <Nav2>
            <h2>Social</h2>
            <ul>
            <LinkNavegation icon={<FaLinkedin />} name="LinkedIn" target="_blank" rel="noopener noreferrer" link="https://www.linkedin.com/in/henriquepinheiroxavier/" />
            <LinkNavegation icon={<FaGithub/>} name="Github" target="_blank" rel="noopener noreferrer" link="https://github.com/henriquepx" />
            <LinkNavegation icon={<FaFilePdf />} href="/cv.pdf" name="CV" download /> </ul>
        </Nav2>

      <Language>
                <ChangeLanguage>
                    <img onClick={() => handleChangeLanguage('pt')} src="/brazilflag.png" alt="Bandeira do Brasil" />
                    <img onClick={() => handleChangeLanguage('en')} src="/euaflag.png" alt="Bandeira dos Estados Unidos" />
                </ChangeLanguage>
            </Language>

    </ContainerProfile>
  )
};

Profile.propTypes = {
    showProfile: PropTypes.bool.isRequired,
};

export default Profile;