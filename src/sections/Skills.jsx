import styled from 'styled-components';
import LanguageSkill from '../components/LanguageSkill';
import { useTranslation } from "react-i18next";

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
    max-width: 720px;
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
    const { t } = useTranslation();


  return (
    <SkillsContainer id='skills'>
        <SkillsSize>
           
<TitleSkills>{t("project.ProjectName")}</TitleSkills>
            <SkillsWrap>
                <LanguageSkill
                    icon="/skills/react.png" 
                    title="React" 
                    description={t("project.ReactDescription")}
                />
                <LanguageSkill
                    icon="/skills/javascript.png" 
                    title="JavaScript" 
                    description={t("project.JavaScriptDescription")}
                />
                <LanguageSkill
                    icon="/skills/styledcomponents.png" 
                    title="Styled Components" 
                    description={t("project.StyledCompoDescription")}
                />
                <LanguageSkill
                    icon="/skills/sass.png" 
                    title="Sass" 
                    description={t("project.SassDescription")}
                />
                <LanguageSkill
                    icon="/skills/tailwind.png" 
                    title="Tailwind" 
                    description={t("project.TailwindDescription")}
                />
                <LanguageSkill
                    icon="/skills/bootstrap.png" 
                    title="Bootstrap" 
                    description={t("project.BoostrapDescription")}
                />
                <LanguageSkill
                    icon="/skills/css.png" 
                    title="CSS" 
                    description={t("project.CSSDescription")}
                />
                <LanguageSkill
                    icon="/skills/html.png" 
                    title="HTML" 
                    description={t("project.HTMLDescription")}
                />
            </SkillsWrap>
            <LearningSkills>{t("project.ProjectLearning")}</LearningSkills>
            <SkillsWrap>
                <LanguageSkill
                    icon="/skills/typescript.png" 
                    title="TypeScript" 
                    description={t("project.TypeScriptDescription")}
                />
                <LanguageSkill
                    icon="/skills/angular.png" 
                    title="Angular" 
                    description={t("project.AngularDescription")}
                />
                <LanguageSkill
                    icon="/skills/sql.png" 
                    title="SQL" 
                    description={t("project.SQLDescription")}
                />
                <LanguageSkill
                    icon="/skills/nodejs.png" 
                    title="NodeJS" 
                    description={t("project.NodeDescription")}
                />
            </SkillsWrap>
            <TextAboutSkills>
                <h3>{t("project.SkillsTextT")}</h3>
                <p>{t("project.SkillsText1")}</p>
                <p>{t("project.SkillsText2")}</p>
                <p>{t("project.SkillsText3")}</p>
            </TextAboutSkills>
        </SkillsSize>
    </SkillsContainer>
  )
}

export default Skills