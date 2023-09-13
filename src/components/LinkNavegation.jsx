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
    &.certificado {
    background-color: #3d3d3d;
    color: #FFFFFF;
    border-radius: 10px;
  }
    &:hover {
        color: #cccbcb;
        background-color: #333232;
        border-radius: 10px;
    }
`

const SoonFeature = styled.div`
    position: absolute;
    top: 5px;
    right: 20px; 
    background-color: #333333;
    color: #ffffff;
    transform: rotate(45deg);
    padding: 3px 8px;
    font-size: 12px;
    border-top-left-radius: 17px;
    border-bottom-right-radius: 17px;
    &:hover {
      background-color: #333232;
    }
`

const LinkNavegation = ({ name, icon, active, onClick, link, isSoon }) => {
  const classes = isSoon ? 'certificado' : '';
  return (
    <LinkContainer href={link} active={active} onClick={onClick}  className={classes}>
      {icon}
      {name}
      {isSoon && <SoonFeature>soon</SoonFeature>}
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