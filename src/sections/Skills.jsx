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
    @media (min-width: 1024px) and (max-width: 1280px) {
    padding-left: 19rem;
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
           
<TitleSkills>{t("skill.SkillName")}</TitleSkills>
            <SkillsWrap>
                <LanguageSkill
                    icon="/skills/react.png" 
                    title="React" 
                    description={t("skill.ReactDescription")}
                />
                <LanguageSkill
                    icon="/skills/javascript.png" 
                    title="JavaScript" 
                    description={t("skill.JavaScriptDescription")}
                />
                <LanguageSkill
                    icon="/skills/styledcomponents.png" 
                    title="Styled Components" 
                    description={t("skill.StyledCompoDescription")}
                />
                <LanguageSkill
                    icon="/skills/sass.png" 
                    title="Sass" 
                    description={t("skill.SassDescription")}
                />
                <LanguageSkill
                    icon="/skills/tailwind.png" 
                    title="Tailwind" 
                    description={t("skill.TailwindDescription")}
                />
                <LanguageSkill
                    icon="/skills/bootstrap.png" 
                    title="Bootstrap" 
                    description={t("skill.BoostrapDescription")}
                />
                <LanguageSkill
                    icon="/skills/css.png" 
                    title="CSS" 
                    description={t("skill.CSSDescription")}
                />
                <LanguageSkill
                    icon="/skills/html.png" 
                    title="HTML" 
                    description={t("skill.HTMLDescription")}
                />
            </SkillsWrap>
            <LearningSkills>{t("skill.SkillLearning")}</LearningSkills>
            <SkillsWrap>
                <LanguageSkill
                    icon="/skills/typescript.png" 
                    title="TypeScript" 
                    description={t("skill.TypeScriptDescription")}
                />
                <LanguageSkill
                    icon="/skills/angular.png" 
                    title="Angular" 
                    description={t("skill.AngularDescription")}
                />
                <LanguageSkill
                    icon="/skills/sql.png" 
                    title="SQL" 
                    description={t("skill.SQLDescription")}
                />
                <LanguageSkill
                    icon="/skills/nodejs.png" 
                    title="NodeJS" 
                    description={t("skill.NodeDescription")}
                />
            </SkillsWrap>
            <TextAboutSkills>
                <h3>{t("skill.SkillsTextT")}</h3>
                <p>{t("skill.SkillsText1")}</p>
                <p>{t("skill.SkillsText2")}</p>
                <p>{t("skill.SkillsText3")}</p>
            </TextAboutSkills>
        </SkillsSize>
    </SkillsContainer>
  )
}

export default Skills