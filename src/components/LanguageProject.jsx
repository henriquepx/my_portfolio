import styled from 'styled-components';
import PropTypes from 'prop-types';

const LanguageContainer = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-size: .7rem;
    color: #ffffff;
    background-color: #252525;
    border: 2px solid #252525;
    padding: .5rem;
    border-radius: 10px;
    &:hover {
        border: 2px solid #707070;
    }
`

const LanguageProject = ({language}) => {
  return (
    <LanguageContainer href='#'>
        {language}
    </LanguageContainer>
  )
}

LanguageProject.propTypes = {
    language: PropTypes.string.isRequired,
};

export default LanguageProject