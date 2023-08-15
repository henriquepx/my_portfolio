import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkContainer = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
    
    border: 1px solid transparent;
    padding: .7rem 0rem .7rem .7rem;

    color: #9e9b9b;
    &:hover {
        color: #cccbcb;
        background-color: #333232;
        border-radius: 10px;
    }
    &:hover a {
        color: #cccbcb;  
    }
    a {
        color: #9e9b9b;
        font-family: 'Montserrat', sans-serif;
    }
`

const LinkNavegation = ({ name, icon, active, onClick, link }) => {
  return (
    <LinkContainer active={active} onClick={onClick}>
        {icon}
        <a href={link}>{name}</a>
    </LinkContainer>
  )
}

LinkNavegation.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    link: PropTypes.string,
  };

export default LinkNavegation