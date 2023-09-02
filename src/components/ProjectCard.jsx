import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectContainerCard = styled.div`
    display: flex;
    flex-direction: flex;
    max-width: 900px;
    @media (max-width: 1240px) {
      flex-direction: column;
      margin-bottom: 3rem;
    }
`
const ImgProject = styled.img`
  height: 65%;
  max-width: 100%;
  background: #1f1f1f;
  padding: 1.5rem 2rem 0rem 2rem;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  object-fit: cover;
  @media (max-width: 1240px) {
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  
`;
const DivTextProject = styled.div`
  background: #252525;
  padding: 1.1rem 2rem;
  max-height: 65%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1240px) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
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
const LinksProjectCard = styled.div`
    display: flex;
    gap: 10px;
    margin-top: .3rem;
`
const LinkToRepoDeploy = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #fffdfd;
  }
  span {
      font-size: .9rem;
      color: #dad7d7;
      cursor: pointer;
    }
`
const LanguageProject = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: .8rem;
    color: #797979;
`

const ProjectCard = ({
    imgproject,
    altproject,
    titleproject,
    descproject,
    language,
    linkrepository,
    linkdeploy, 
  }) => {
    return (
      <ProjectContainerCard>
        <ImgProject src={imgproject} alt={altproject} />
        <DivTextProject>
          <div>
            <TitleProject>{titleproject}</TitleProject>
            <DescriptionProject>{descproject}</DescriptionProject>
          </div>
          <div>
            <LanguageProject>{language}</LanguageProject>
            <LinksProjectCard>
              <LinkToRepoDeploy href={linkdeploy} target='_blank' rel='noreferrer'>
                <p>Deploy</p>
                <span><FaLink /></span>
              </LinkToRepoDeploy>
              <LinkToRepoDeploy href={linkrepository} target='_blank' rel='noreferrer'>
                <p>Repositório</p>
                <span><FaGithub /></span>
                </LinkToRepoDeploy>
            </LinksProjectCard>
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
    language: PropTypes.string.isRequired,
    linkrepository: PropTypes.string.isRequired,
    linkdeploy: PropTypes.string.isRequired,
  };

export default ProjectCard