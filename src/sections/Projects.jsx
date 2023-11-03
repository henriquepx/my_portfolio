import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import ProjectNew from '../components/ProjectNew';

const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;

  background-color: #161616;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10rem 0rem 10rem 18rem;
  @media (max-width: 1600px) {
    padding-left: 20rem;
  }
  @media (max-width: 1024px) {
    padding: 1rem;
    height: 100%;
  }
`
const ProjectSize = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const TitleProject = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: white;
  font-weight: 610;
`
const DescriptionProject = styled.p`
 font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  color: #9e9b9b;
`
const EstimatePrice = styled.a`
  margin-bottom: 4rem;
  max-width: 220px;
  color: #FFF;
  border: 2px solid #3d3d3d;
  border-radius: 0px;
  padding: 1rem 1rem;
  text-align: center;
  font-family: "Montserrat", sans-serif, monospace;
  font-size: .9rem;
  box-shadow: inset 0 0 0 0 #6d6d6d;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  &:hover {
    box-shadow: inset 400px 0 0 0 #4d4d4d;
  }
`

const Projects = () => {
  
  const { t } = useTranslation();

  return (
    <ProjectsContainer id="projects">
      <ProjectSize>
        <TitleProject>{t("project.ProjectName")}</TitleProject>
        <DescriptionProject>{t("project.ProjectDesc1")}<br /><br />{t("project.ProjectDesc2")}</DescriptionProject>
        <EstimatePrice href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Gostaria%20de%20um%20or%C3%A7amento!" target='_blank' rel='noreferrer'>{t("project.ProjectPrice")}</EstimatePrice>
        <ProjectNew
          imgproject="/testdsm.jpg"
          titleproject={t("project.DSMTitle")}
          descproject={t("project.DSMDescription")}
          languagesproject={'HTML, CSS & Sass'}
          linkrepository={'https://github.com/henriquepx/dsm'}
          linkdeploy={'https://dsmconsultoria.vercel.app/'}
        />
        <ProjectNew
          imgproject="/testphoto.jpg"
          titleproject={t("project.PhotographerTitle")}
          descproject={t("project.PhotographerDescription")}
          languagesproject={'HTML, CSS & Sass'}
          linkrepository={'https://github.com/henriquepx/photographer_portfolio'}
          linkdeploy={'https://photographerportfolio.vercel.app/'}
        />
        <ProjectNew
          imgproject="/testrx.jpg"
          titleproject={'Rexpeita'}
          descproject={t("project.RXDescription")}
          languagesproject={'HTML, CSS & JavaScript'}
          linkrepository={'https://github.com/henriquepx/ecommerce_rexpeita'}
          linkdeploy={'https://rexpeita-ecommerce.netlify.app/index.html'}
        />
        <ProjectNew
          imgproject="/testreal.jpg"
          titleproject={'Real Estate'}
          descproject={t("project.RealStateDescription")}
          languagesproject={'ReactJS & Styled Components'}
          linkrepository={'https://github.com/henriquepx/real_estate'}
          linkdeploy={'https://real-estate-omega-nine.vercel.app/'}
        />
        <ProjectNew
          imgproject="/testjapa.jpg"
          titleproject={'Japapou?'}
          descproject={t("project.JapapouDescription")}
          languagesproject={'ReactJS & CSS Modules'}
          linkrepository={'https://github.com/henriquepx/app-order-food'}
          linkdeploy={'https://app-order-food.vercel.app/'}
        />
      </ProjectSize>
    </ProjectsContainer>
  );
};

export default Projects