import styled from 'styled-components';
import PropTypes from 'prop-types';

const LanguageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #1f1f1f;
    padding: .7rem;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #1f1f1f;

    width: 300px;
    &:hover {
        background-color: #242323;
        border: 1px solid #333232;
    }
    div {
        h1 {
            font-family: 'Montserrat', sans-serif;
            color: #fffdfd;
            margin-bottom: 5px;
        }
        p {
            font-family: 'Montserrat', sans-serif;
            color: #8a8a8a;
            font-size: .8rem;
        }
    }
`

const LanguageSkill = ({ icon, title, description }) => {
  return (
    <LanguageContainer>
        <img src={icon} alt="" />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </LanguageContainer>
  )
}

LanguageSkill.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default LanguageSkill;