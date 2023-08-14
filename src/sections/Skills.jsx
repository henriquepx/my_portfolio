import styled from 'styled-components';

const SkillsContainer = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
`
const SkillsSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`
const TitleSkills = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: white;
    font-weight: 610;
`

const Skills = () => {
  return (
    <SkillsContainer id='skills'>
        <SkillsSize>
            <TitleSkills>Skills</TitleSkills>
            <div>
            </div>
        </SkillsSize>
    </SkillsContainer>
  )
}

export default Skills