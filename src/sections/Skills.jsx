import styled from 'styled-components'
import SkillsFaq from '../components/SkillsFaq';

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

const languages = [
    {
      id: 1,
      icon: 'skills/react.png',
      language: 'React',
      description: 'x'
    },
    {
      id: 2,
      icon: 'skills/javascript.png',
      language: 'JavaScript',
      description: 'x'
    },
    {
        id: 3,
        icon: 'skills/styledcomponents.png',
        language: 'Styled Components',
        description: 'x'
    },
    {
        id: 4,
        icon: 'skills/tailwind.png',
        language: 'Tailwind',
        description: 'x'
    },
    {
        id: 5,
        icon: 'skills/sass.png',
        language: 'Sass',
        description: 'x'
    },
    {
        id: 6,
        icon: 'skills/bootstrap.png',
        language: 'Bootstrap',
        description: 'x'
    },
    {
        id: 7,
        icon: 'skills/html.png',
        language: 'HTML',
        description: 'x'
    },
    {
        id: 8,
        icon: 'skills/css.png',
        language: 'CSS',
        description: 'x'
    },
    {
        id: 9,
        icon: 'skills/typescript.png',
        language: 'TypeScript',
        description: 'x'
    },
    {
        id: 10,
        icon: 'skills/angular.png',
        language: 'Angular',
        description: 'x'
    },
  ];


const Skills = () => {
  return (
    <SkillsContainer id='skills'>
        <SkillsSize>
            {languages.map(item => (
                <SkillsFaq
                key={item.id}
                icon={item.icon}
                language={item.language}
                description={item.description}
                />
            ))}
        </SkillsSize>
    </SkillsContainer>
  )
}

export default Skills