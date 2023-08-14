import styled from 'styled-components';
import { useState } from 'react';
import LinkNavegation from '../components/LinkNavegation';
import { FaInfoCircle, FaCode, FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaDesktop } from 'react-icons/fa';

const ContainerProfile = styled.div`
    position: fixed;
    height: 100%;
    width: 18rem;
    left: 0;

    background-color: #222222;

    display: flex;
    flex-direction: column;
    padding: 1.7rem;

    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const ProfileApresentation = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 1rem;
`
const ImgProfile = styled.img`
    border-radius: 50%;
    width: 15%;
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

const Nav2 = styled.nav`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: .8rem;
        color: #6b6b6b;
    }
`

const Profile = () => {

    const [activeTab, setActiveTab] = useState('Contact');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

  return (
    <ContainerProfile>
        <ProfileApresentation>
            <ImgProfile src="profile.jpeg" alt="Foto profile do Henrique" />
            <div>
                <TitleProfile>Henrique Pinheiro</TitleProfile>
                <DescProfile>Desenvolvedor Front-end</DescProfile>
            </div>
        </ProfileApresentation>

        <Nav2>
        <h2>Sections</h2>
        <ul>
          <LinkNavegation
            icon={<FaInfoCircle />}
            name="About"
            active={activeTab === 'About'}
            onClick={() => handleTabClick('About')}
            link="#about"
          />
          <LinkNavegation
            icon={<FaCode />}
            name="Skills"
            active={activeTab === 'Skills'}
            onClick={() => handleTabClick('Skills')}
          />
          <LinkNavegation
            icon={<FaEnvelope />}
            name="Contact"
            active={activeTab === 'Contact'}
            onClick={() => handleTabClick('Contact')}
            link="#footer"
          />
        </ul>
      </Nav2>

      <Nav2>
        <h2>Stacks</h2>
        <ul>
          <LinkNavegation
            icon={<FaDesktop />}
            name="Front-end"
            active={activeTab === 'Front-end'}
            onClick={() => handleTabClick('Front-end')}
          />
        </ul>
      </Nav2>

        <Nav2>
            <h2>Social</h2>
            <ul>
                <LinkNavegation icon={<FaLinkedin />} name="LinkedIn" link="https://www.linkedin.com/in/henriquepinheiroxavier/" target='_blank' rel='noreferrer' />
                <LinkNavegation icon={<FaGithub/>} name="Github" link="https://github.com/henriquepx" target='_blank' rel='noreferrer' />
                <LinkNavegation icon={<FaFilePdf />} name="CV" link="#footer" />
            </ul>
        </Nav2>
    </ContainerProfile>
  )
}

export default Profile;