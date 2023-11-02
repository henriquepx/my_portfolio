import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: -100%;
  margin: auto;
  transition: left 0.2s;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px;
  width: 100%;
  font-size: 0.9rem;
`;

const Description = styled.div`
  padding: 1.2rem 1.5rem;
  background: #1d1d1d;
  position: relative;
  z-index: 0;
  a {
    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }

  h2 {
    font-size: 0.8rem;
    font-weight: 300;
    color: #a2a2a2;
    margin-top: 1rem;
  }

  p {
    position: relative;
    margin: 1rem 0 0;
    margin-top: 1.25rem;
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
  &.reverse { 
    flex-direction: row-reverse;
    @media (max-width: 639px) {
    flex-direction: column;
  }
  ${Description} {
    &:before {
       transform: skewX(3deg);
    }
    }
  }
  &:hover {
    ${Photo} {
      transform: scale(1.3) rotate(3deg);
      width: 100%;

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
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #1d1d1d;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
  }

  @media (max-width: 639px) {
    flex-direction: column;
  }
`;

const ProjectNew = ({
  imgproject,
  titleproject,
  descproject,
  languagesproject,
  linkrepository,
  linkdeploy, 
  reverse,
}) => {
  return (
    <BlogCardContainer  className={reverse ? 'reverse' : ''}> 
      <Meta>
      <Photo imgproject={imgproject} />
        <Details>
          <a href={linkrepository} target='_blank' rel='noreferrer'>Repositório</a>
        </Details>
      </Meta>
      <Description>
        <a href={linkdeploy} target='_blank' rel='noreferrer'>{titleproject}</a>
        <h2>{languagesproject}</h2>
        <p>{descproject}</p>
      </Description>
    </BlogCardContainer>
  );
};

ProjectNew.propTypes = {
  imgproject: PropTypes.string.isRequired,
  titleproject: PropTypes.string.isRequired,
  descproject: PropTypes.string.isRequired,
  languagesproject: PropTypes.string.isRequired,
  linkrepository: PropTypes.string.isRequired,
  linkdeploy: PropTypes.string.isRequired,
  reverse: PropTypes.bool, 
};

export default ProjectNew;
