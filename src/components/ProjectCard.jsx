import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { useTranslation } from "react-i18next";

const ProjectContainerCard = styled.div`
    display: flex;
    flex-direction: column;
`
const ImgProject = styled.img`
  background: #1f1f1f;
  width: 100%;
  @media (max-width: 1240px) {
    max-width: 100%;
    padding: 1rem;
  }
`;
const DivTextProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 5rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`
const TextDescLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextDescRight = styled.div`
  display: flex;
  flex-direction: column;
`
const TitleProject = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;

    color: #fffdfd;
    margin-bottom: 2rem;
`
const DescriptionProject = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    color: #8a8a8a;
    padding-bottom: 1rem;

    text-align: right;
    max-width: 60ch;
    @media (max-width: 1000px) {
    text-align: left;
  }
`
const LanguagesProject = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  color: #bebdbd;
  margin-top: 10px;
`
const LinkToWeb = styled.a`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 1rem 1rem;
  background-color: transparent;

  max-width: 200px;
  outline: none;

  font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  color: #ffffff;

  border: 2px solid #3d3d3d;
  border-radius: 0px;
  box-shadow: inset 0 0 0 0 #6d6d6d;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  &:hover {
    box-shadow: inset 400px 0 0 0 #4d4d4d;
  }
`
const SiteAr = styled.p`
  font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #c2c1c1;
  margin-bottom: 1rem;
`
const TecUsed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 4px solid gray;
  padding: 2rem 0rem;
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #c2c1c1;
  }
`
const ThreeDots = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
margin: 5rem 0rem;
span {
  width: 5px;
  height: 5px;
  background-color: gray;
}
`


const ProjectCard = ({
    imgproject,
    altproject,
    titleproject,
    descproject,
    languagesproject,
    linkrepository,
    linkdeploy, 
  }) => {

    const { t } = useTranslation();

    return (
      <ProjectContainerCard>
        <a href={linkdeploy} target='_blank' rel='noreferrer'>
          <ImgProject src={imgproject} alt={altproject} />
        </a>
        
        <DivTextProject>

          <TextDescLeft>
          <TitleProject>{titleproject}</TitleProject>
            <SiteAr>Deploy:</SiteAr>
            <LinkToWeb href={linkdeploy} target='_blank' rel='noreferrer'>
              <span>{t("projectcard.Web")}</span>
              <BiLinkExternal />
            </LinkToWeb>
          </TextDescLeft>

          <TextDescRight>
            <DescriptionProject>{descproject}</DescriptionProject>
            <TecUsed>
              <h3>{t("projectcard.Tecnologias")}</h3>
              <LanguagesProject>{languagesproject}</LanguagesProject>
            </TecUsed>
            <TecUsed>
              <h3>Github:</h3>
              <LinkToWeb href={linkrepository} target='_blank' rel='noreferrer'>
                <span>{t("projectcard.Repositorio")}</span>
                <FaGithub />
              </LinkToWeb>
            </TecUsed>
          </TextDescRight>

        </DivTextProject>

        <ThreeDots>
          <span></span>
          <span></span>
          <span></span>
        </ThreeDots>
      </ProjectContainerCard>
      
      
      
  
      
      
    );
  };

  ProjectCard.propTypes = {
    imgproject: PropTypes.string.isRequired,
    altproject: PropTypes.string.isRequired,
    titleproject: PropTypes.string.isRequired,
    descproject: PropTypes.string.isRequired,
    languagesproject: PropTypes.string.isRequired,
    linkrepository: PropTypes.string.isRequired,
    linkdeploy: PropTypes.string.isRequired,
  };

export default ProjectCard