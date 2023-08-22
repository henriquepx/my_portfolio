import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
`
const ProjectSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`
const TitleProject = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: white;
    font-weight: 610;
`

const Projects = () => {

  const projectData = [
    {
      img: "/spotifyscreen.png",
      alt: "Spotify Tela",
      title: "Spotify",
      desc: "Clone project of the official Spotify website. The clone includes all the main pages of the original website!",
      languages: ["HTML", "CSS", "JavaScript", "Sass"],
      linkrepository: "https://github.com/henriquepx/spotify_clone",
      linkdeploy: "https://spotify-clone-henriqdev.netlify.app/index.html",
    },
    {
      img: "/rexpeitascreen.png",
      alt: "Rexpeita Tela",
      title: "Rexpeita",
      desc: "Complete e-commerce project, with login screens, registration, cart, individual product pages and etc...",
      languages: ["HTML", "CSS", "JavaScript", "Sass"],
      linkrepository: "https://github.com/henriquepx/ecommerce_rexpeita",
      linkdeploy: "https://rexpeita-ecommerce.netlify.app/index.html",
    },
    {
      img: "/japascreen.png",
      alt: "Japapou Tela",
      title: "Japapou?",
      desc: "React Practice Project for honing React skills.",
      languages: ["React", "CSS Modules"],
      linkrepository: "https://github.com/henriquepx/app-order-food",
      linkdeploy: "https://app-order-food.vercel.app/",
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <ProjectSize>
        <TitleProject>Projetos</TitleProject>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imgproject={project.img}
            altproject={project.alt}
            titleproject={project.title}
            descproject={project.desc}
            languages={project.languages}
            linkrepository={project.linkrepository}
            linkdeploy={project.linkdeploy}
          />
        ))}
      </ProjectSize>
    </ProjectsContainer>
  );
};

export default Projects