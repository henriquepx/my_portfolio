import styled from 'styled-components';
import PropTypes from 'prop-types';
import LanguageProject from './LanguageProject';
import { FaLink, FaGithub } from 'react-icons/fa';

const ProjectContainerCard = styled.div`
    display: flex;
    align-items: center;

    gap: 50px;
`
const ImgProject = styled.img`
    width: 40%;
`
const TitleProject = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    color: #fffdfd;
    margin-bottom: 1rem;
`
const DescriptionProject = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    color: #8a8a8a;
    margin-bottom: 1rem;
`
const LinksContainerProject = styled.div`
    display: flex;
    gap: 10px;
`
const LinksProjectCard = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 1rem;
    a {
        font-size: 1.5rem;
        color: #dad7d7;
        cursor: pointer;
    }
`

const ProjectCard = ({
    imgproject,
    altproject,
    titleproject,
    descproject,
    languages,
    linkrepository,
    linkdeploy, 
  }) => {
    return (
      <ProjectContainerCard>
        <ImgProject src={imgproject} alt={altproject} />
        <div>
          <TitleProject>{titleproject}</TitleProject>
          <DescriptionProject>{descproject}</DescriptionProject>
          <LinksContainerProject>
            {languages.map((language, index) => (
              <LanguageProject key={index} language={language} />
            ))}
          </LinksContainerProject>
          <LinksProjectCard>
            <a href={linkdeploy} target='_blank' rel='noreferrer'><FaLink /></a>
            <a href={linkrepository} target='_blank' rel='noreferrer'><FaGithub /></a>
          </LinksProjectCard>
        </div>
      </ProjectContainerCard>
    );
  };

  ProjectCard.propTypes = {
    imgproject: PropTypes.string.isRequired,
    altproject: PropTypes.string.isRequired,
    titleproject: PropTypes.string.isRequired,
    descproject: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    linkrepository: PropTypes.string.isRequired,
    linkdeploy: PropTypes.string.isRequired,
  };

export default ProjectCard