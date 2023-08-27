import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
    
    border: 1px solid transparent;
    padding: .7rem 0rem .7rem .7rem;

    color: #9e9b9b;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        color: #cccbcb;
        background-color: #333232;
        border-radius: 10px;
    }
`

const LinkNavegation = ({ name, icon, active, onClick, link }) => {
  return (
    <LinkContainer href={link} active={active} onClick={onClick}>
        {icon}
        {name}
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