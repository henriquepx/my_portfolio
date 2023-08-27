import styled from 'styled-components';
import LanguageSkill from '../components/LanguageSkill';

const SkillsContainer = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
    @media (max-width: 1024px) {
      padding: 1rem;
    }
`
const SkillsSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`
const TitleSkills = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: white;
    font-weight: 610;
`
const SkillsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const LearningSkills = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 4rem 0rem 1rem 0rem;
    color: white;
    font-weight: 610;
`

const Skills = () => {
  return (
    <SkillsContainer id='skills'>
        <SkillsSize>
            <TitleSkills>Skills</TitleSkills>
            <SkillsWrap>
                <LanguageSkill
                    icon="/skills/react.png" 
                    title="React" 
                    description="Biblioteca de interfaces interativas."
                />
                <LanguageSkill
                    icon="/skills/javascript.png" 
                    title="JavaScript" 
                    description="Linguagem para desenvolvimento web."
                />
                <LanguageSkill
                    icon="/skills/styledcomponents.png" 
                    title="Styled Components" 
                    description="Estilização de componentes."
                />
                <LanguageSkill
                    icon="/skills/sass.png" 
                    title="Sass" 
                    description="Pré-processador de estilos."
                />
                <LanguageSkill
                    icon="/skills/tailwind.png" 
                    title="Tailwind" 
                    description="Framework CSS utilitário."
                />
                <LanguageSkill
                    icon="/skills/bootstrap.png" 
                    title="Bootstrap" 
                    description="Framework CSS responsivo."
                />
                <LanguageSkill
                    icon="/skills/css.png" 
                    title="CSS" 
                    description="Estilização de páginas."
                />
                <LanguageSkill
                    icon="/skills/html.png" 
                    title="HTML" 
                    description="Marcação de páginas web."
                />
            </SkillsWrap>
            <LearningSkills>Learning:</LearningSkills>
            <SkillsWrap>
                <LanguageSkill
                    icon="/skills/typescript.png" 
                    title="TypeScript" 
                    description="Superset do JavaScript."
                />
                <LanguageSkill
                    icon="/skills/angular.png" 
                    title="Angular" 
                    description="Framework escalável."
                />
            </SkillsWrap>
        </SkillsSize>
    </SkillsContainer>
  )
}

export default Skills