import styled from 'styled-components';
import LanguageSkill from '../components/LanguageSkill';

const SkillsContainer = styled.div`
    height: 100%;
    width: 100%;

    background-color: #161616;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12rem 0rem 10rem 10rem;
    @media (max-width: 1024px) {
      padding: 2rem 1rem 5rem 1rem;
      height: 100%;
    }
`
const SkillsSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
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
    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`
const LearningSkills = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 4rem 0rem 1rem 0rem;
    color: white;
    font-weight: 610;
`
const TextAboutSkills = styled.div`
    padding: 1rem;
    background-color: #1d1d1d;

    margin-top: 3rem;
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: .9rem;
        color: white;
    }
    p {
        font-family: 'Montserrat', sans-serif;
        font-size: .8rem;
        color: #8a8a8a;
        margin-top: 10px;
    }
`

const Skills = () => {
  return (
    <SkillsContainer id='skills'>
        <SkillsSize>
            <TitleSkills>Habilidades</TitleSkills>
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
            <LearningSkills>Aprendendo:</LearningSkills>
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
                <LanguageSkill
                    icon="/skills/sql.png" 
                    title="SQL" 
                    description="Gerenciamento de Dados Relacionais."
                />
                <LanguageSkill
                    icon="/skills/nodejs.png" 
                    title="NodeJS" 
                    description="Ambiente de Servidor JavaScript."
                />
            </SkillsWrap>
            <TextAboutSkills>
                <h3>Planos pro futuro.</h3>
                <p>Atualmente, meu foco principal é no desenvolvimento front-end. Acredito que a experiência do usuário é fundamental, e estou empenhado em criar interfaces de usuário atraentes e intuitivas que proporcionem uma ótima experiência aos usuários finais.</p>
                <p>Além disso, estou sempre em busca de aprendizado contínuo. Estou explorando novas tecnologias, como TypeScript e Angular, para expandir ainda mais meu conjunto de habilidades e abraçar desafios mais amplos no futuro.</p>
                <p>Meu objetivo final é me tornar um desenvolvedor Fullstack, mas estou ciente da importância de construir uma base sólida no front-end antes de prosseguir para o back-end. Estou comprometido em me manter atualizado com as últimas tendências e melhores práticas do setor, para que eu possa contribuir de maneira significativa para projetos empolgantes e desafiadores.</p>
            </TextAboutSkills>
        </SkillsSize>
    </SkillsContainer>
  )
}

export default Skills