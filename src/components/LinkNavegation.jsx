import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkContainer = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    margin-top: 15px;

    color: #9e9b9b;
    &:hover {
        color: #cccbcb;
    }
    &:hover a {
        color: #cccbcb;  
    }
    a {
        color: #9e9b9b;
        font-family: 'Montserrat', sans-serif;
    }
`

const LinkNavegation = ({ name, link, icon }) => {
  return (
    <LinkContainer>
        {icon}
        <a href={link} target='_blank' rel='noreferrer'>{name}</a>
    </LinkContainer>
  )
}

LinkNavegation.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node,
    link: PropTypes.string.isRequired,
  };

export default LinkNavegation