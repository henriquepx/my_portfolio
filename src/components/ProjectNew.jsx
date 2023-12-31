import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa'

const Photo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.imgproject});
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
`;

const Meta = styled.div`
  position: relative;
  z-index: 0;
  height: 200px;
`;

const TitleProject = styled.a`
  font-size: 1.7rem;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  position: relative;
  margin: 0;
  display: block;
  &:before {
    content: "➲";
    display: inline-block;
    right: -15px;
    opacity: 0;
    position: absolute;
    text-transform: none;
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    visibility: hidden;
    color: #fff;
  }
`

const Description = styled.div`
  padding: 1.2rem 1.5rem;
  background: #1d1d1d;
  position: relative;
  z-index: 0;

  h2 {
    font-size: 0.8rem;
    font-weight: 300;
    color: #a2a2a2;
    margin-top: 1rem;
  }

  p {
    position: relative;
    margin: 1rem 0 0;
    margin-bottom: 4rem;
    color: #bebebe;
    &:before {
      content: "";
      position: absolute;
      height: 2px;
      background: #e0e0e0;
      width: 35px;
      top: -0.75rem;
      border-radius: 3px;
    }
  }
`;

const LinkToRepository = styled.a`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  &::before, &::after {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }
  &:before {
    margin-right: 10px;
    content: '[';
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }
  &:after {
    margin-left: 10px;
    content: ']';
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }
`

const HoverImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.hoverImg});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.4s;
`;

const BlogCardContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1.6%;
  background: #fff;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 15px;
  border: 2px solid #3d3d3d;
  overflow: hidden;
  z-index: 0;

  .github-icon {
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.3s, transform 0.3s;
  }

  &:hover {
    ${TitleProject}:before {
      right: 0;
      opacity: 1;
      visibility: visible;
    }

    ${LinkToRepository}::before {
      opacity: 1;
      transform: translateX(0);
    }
    ${LinkToRepository}::after {
      opacity: 1;
      transform: translateX(0);
    }

    .github-icon {
      opacity: 1;
      transform: translateX(0);
    }

    ${HoverImage} {
      opacity: 1;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 1000px;
    height: 300px;
    ${Meta} {
      flex-basis: 50%;
      height: auto;
    }
    ${Description} {
      flex-basis: 50%;
    }
  }

  @media (max-width: 639px) {
    flex-direction: column;
  }
`;


const ProjectNew = ({
  imgproject,
  hoverImg,
  titleproject,
  descproject,
  languagesproject,
  linkrepository,
  linkdeploy, 
}) => {
  return (
    <BlogCardContainer hoverImg={hoverImg}> 
      <Meta>
        <Photo imgproject={imgproject} />
        <HoverImage hoverImg={hoverImg}  />
      </Meta>
      <Description>
        <TitleProject href={linkdeploy} target='_blank' rel='noreferrer'>{titleproject}</TitleProject>
        <h2>{languagesproject}</h2>
        <p>{descproject}</p>
        <LinkToRepository href={linkrepository} target='_blank' rel='noreferrer'>Repositório
          <FaGithub className="github-icon" />
        </LinkToRepository>
      </Description>
    </BlogCardContainer>
  );
};

ProjectNew.propTypes = {
  imgproject: PropTypes.string.isRequired,
  hoverImg: PropTypes.string.isRequired,
  titleproject: PropTypes.string.isRequired,
  descproject: PropTypes.string.isRequired,
  languagesproject: PropTypes.string.isRequired,
  linkrepository: PropTypes.string.isRequired,
  linkdeploy: PropTypes.string.isRequired,
};

export default ProjectNew;
