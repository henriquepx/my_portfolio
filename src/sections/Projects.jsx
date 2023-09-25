import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from "react-i18next";

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

  const projectData = [
    {
      img: "/rxscreen.png",
      alt: t("project.RXAlt"),
      title: "Rexpeita",
      desc: t("project.RXDescription"),
      languagesproject: "HTML, CSS & JavaScript",
      linkrepository: "https://github.com/henriquepx/ecommerce_rexpeita",
      linkdeploy: "https://rexpeita-ecommerce.netlify.app/index.html",
    },
  {
    img: "/spotifyscreen.png",
    alt: t("project.SpotifyAlt"), 
    title: "Spotify",
    desc: t("project.SpotifyDescription"), 
    languagesproject: "HTML, CSS & JavaScript",
    linkrepository: "https://github.com/henriquepx/spotify_clone",
    linkdeploy: "https://spotify-clone-henriqdev.netlify.app/index.html",
  },
  {
    img: "/japascreen.png",
    alt: t("project.JapapouAlt"),
    title: "Japapou?",
    desc: t("project.JapapouDescription"),
    languagesproject: "ReactJS & CSS Modules",
    linkrepository: "https://github.com/henriquepx/app-order-food",
    linkdeploy: "https://app-order-food.vercel.app/",
  },
];

  return (
    <ProjectsContainer id="projects">
      <ProjectSize>
        <TitleProject>{t("project.ProjectName")}</TitleProject>
        <DescriptionProject>{t("project.ProjectDesc1")}<br /><br />{t("project.ProjectDesc2")}</DescriptionProject>
        <EstimatePrice href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Gostaria%20de%20um%20or%C3%A7amento!" target='_blank' rel='noreferrer'>{t("project.ProjectPrice")}</EstimatePrice>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imgproject={project.img}
            altproject={project.alt}
            titleproject={project.title}
            descproject={project.desc}
            languagesproject={project.languagesproject}
            linkrepository={project.linkrepository}
            linkdeploy={project.linkdeploy}
          />
        ))}
      </ProjectSize>
    </ProjectsContainer>
  );
};

export default Projects