import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

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

  margin-top: 2rem;
  &:hover {
    background: #6d6d6d;
    color: #fff;
  }
  &:before, &:after {
    content:'';
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #c0c0c0;
    transition:400ms ease all;
  }
  &:after {
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  &:hover::before,
  &:hover::after {
    width:100%;
    transition:800ms ease all;
  }
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
              <LinkToRepoDeploy href={linkrepository} target='_blank' rel='noreferrer'>
                <p>Repositório</p>
                <span><FaGithub /></span>
              </LinkToRepoDeploy>
            </LinksProjectCard>
          </div>
          <LinkToWeb href={linkdeploy} target='_blank' rel='noreferrer'>
            <span>Ver na web</span>
            <BiLinkExternal />
          </LinkToWeb>
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