import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SkillsFaqContainer = styled.div`
  width: 370px;
`;
const SkillsFaqHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #383838;
  cursor: pointer;
`;
const TitleDescSkills = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
`;
const ToggleButton = styled.button`
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff; 
`;
const AccordionContent = styled.div`
  padding: .5rem 2rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #383838;
`;

const SkillsFaq = ( { icon, language, description } ) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };

    return (
        <SkillsFaqContainer>
            <SkillsFaqHeader onClick={toggleAccordion}>
                <TitleDescSkills>
                    <img src={icon} alt={language} />
                    <Title>{language}</Title>
                </TitleDescSkills>
                <ToggleButton>{isOpen ? '-' : '+'}</ToggleButton>
            </SkillsFaqHeader>
            <AccordionContent isOpen={isOpen}>{description}</AccordionContent>
        </SkillsFaqContainer>
    );
};

SkillsFaq.propTypes = {
    icon: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default SkillsFaq