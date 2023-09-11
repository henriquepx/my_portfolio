import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { useTranslation } from "react-i18next";

const ProjectContainerCard = styled.div`
    display: flex;
    flex-direction: flex;
    @media (max-width: 1240px) {
      flex-direction: column;
      margin-bottom: 3rem;
    }
`
const ImgProject = styled.img`
  background: #1f1f1f;
  padding: 1.5rem 2rem 0rem 2rem;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  @media (max-width: 1240px) {
    max-width: 100%;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
const DivTextProject = styled.div`
  background: #252525;
  padding: 1.1rem 2rem;
  max-height: 65%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1240px) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  }
`
const TitleProject = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: #fffdfd;
    margin-bottom: .4rem;
`
const DescriptionProject = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    color: #8a8a8a;
`
const LanguagesProject = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  color: #bebdbd;
  margin-top: 10px;
`
const LinkToWeb = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: .5rem 2rem;
  background-color: #6d6d6d;
  max-width: 175px;
  border: none;
  position: relative;
  transition:800ms ease all;
  outline: none;

  font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  color: #ffffff;

  margin-top: .5rem;
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
        <ImgProject src={imgproject} alt={altproject} />
        <DivTextProject>
          <div>
            <TitleProject>{titleproject}</TitleProject>
            <DescriptionProject>{descproject}</DescriptionProject>
            <LanguagesProject>{languagesproject}</LanguagesProject>
          </div>
          <div>
            <LinkToWeb href={linkrepository} target='_blank' rel='noreferrer'>
              <span>{t("projectcard.Repositorio")}</span>
              <FaGithub />
            </LinkToWeb>
            <LinkToWeb href={linkdeploy} target='_blank' rel='noreferrer'>
              <span>{t("projectcard.Web")}</span>
              <BiLinkExternal />
            </LinkToWeb>
          </div>
        </DivTextProject>
      </ProjectContainerCard>
    );
  };

  ProjectCard.propTypes = {
    imgproject: PropTypes.string.isRequired,
    altproject: PropTypes.string.isRequired,
    titleproject: PropTypes.string.isRequired,
    descproject: PropTypes.string.isRequired,
    languagesproject: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    linkrepository: PropTypes.string.isRequired,
    linkdeploy: PropTypes.string.isRequired,
  };

export default ProjectCard