import styled from 'styled-components';
import LinkNavegation from '../components/LinkNavegation';
import { FaInfoCircle, FaCode, FaEnvelope, FaGraduationCap, FaTrophy, FaLinkedin, FaGithub, FaFilePdf, FaDesktop } from 'react-icons/fa';

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
    
    @media (max-width: 320px) {
        width: 75%;
    }
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
    @media (max-width: 320px) {
        display: none;
    }
`
const TitleProfile = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #f2f2f2;
`
const DescProfile = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    color: #6b6b6b;
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
`
const ChangeLanguage = styled.div`
    display: flex;
    justify-content: space-around;

    color: #9e9b9b;
    font-family: 'Montserrat', sans-serif;
    p {
        padding: .4rem;
        border: 1px solid transparent;
        &:hover {
        color: #cccbcb;
        background-color: #333232;
        border-radius: 10px;
    }
    }
`
const Profile = () => {

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
                name="Sobre mim"
                link="about" 
                />

                <LinkNavegation
                icon={<FaGraduationCap />}
                name="Trajetória"
                link="trajectory"
                />

                <LinkNavegation
                icon={<FaEnvelope />}
                name="Contato"
                link="footer"
                />
            </ul>
      </Nav2>

      <Nav2>
        <h2>Front-end</h2>
        <ul>
                <LinkNavegation
                icon={<FaCode />}
                name="Habilidades"
                link="skills"
                />

                <LinkNavegation
                icon={<FaDesktop />}
                name="Projetos"
                link="projects"
                />

                <LinkNavegation
                icon={<FaTrophy />}
                name="Certificados"
                link="certificates"
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

      <Language>
        <ChangeLanguage>
             <p>Português</p>
             <p>English</p>
        </ChangeLanguage>
      </Language>
    </ContainerProfile>
  )
}

export default Profile;