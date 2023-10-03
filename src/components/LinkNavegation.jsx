import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    cursor: pointer;
    
    border: 1px solid transparent;
    padding: .4rem 0rem .4rem .4rem;

    color: #9e9b9b;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        color: #cccbcb;
        background-color: #333232;
        border-radius: 10px;
    }
`

const LinkNavegation = ({ name, icon, onClick, link, ...rest }) => {
  return (
    <LinkContainer href={link} active onClick={onClick} {...rest}>
      {icon}
      {name}
    </LinkContainer>
  );
};

LinkNavegation.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  link: PropTypes.string,
  isSoon: PropTypes.bool,
};

export default LinkNavegation