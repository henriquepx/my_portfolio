import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
    height: 100%;
    width: 100%;

    background-color: #161616;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10rem 0rem 10rem 10rem;
    @media (max-width: 1024px) {
      padding: 1rem;
      height: 100%;
    }
    @media (max-width: 530px) {
      height: 100%;
    }
`
const ProjectSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`
const TitleProject = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
    font-weight: 610;
`

const Projects = () => {

  const projectData = [
    {
      img: "/spotifyscreen.png",
      alt: "Spotify Tela",
      title: "Spotify",
      desc: "Projeto clone do site oficial do Spotify. O clone inclui todas as páginas principais do site original!",
      language: "HTML, CSS, JavaScript e Sass",
      linkrepository: "https://github.com/henriquepx/spotify_clone",
      linkdeploy: "https://spotify-clone-henriqdev.netlify.app/index.html",
    },
    {
      img: "/rexpeitascreen.png",
      alt: "Rexpeita Tela",
      title: "Rexpeita",
      desc: "Projeto completo de um e-commerce, com tela de login, registo, carrinho de compras, páginas de produtos individuais e etc...",
      language: "HTML, CSS, JavaScript e Sass",
      linkrepository: "https://github.com/henriquepx/ecommerce_rexpeita",
      linkdeploy: "https://rexpeita-ecommerce.netlify.app/index.html",
    },
    {
      img: "/japascreen.png",
      alt: "Japapou Tela",
      title: "Japapou?",
      desc: "Projeto de prática do React para aprimorar as habilidades, utilizando hooks e props pra comunicação de componentes, useState e useContext.",
      language: "ReactJS e CSS Modules",
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
            language={project.language}
            linkrepository={project.linkrepository}
            linkdeploy={project.linkdeploy}
          />
        ))}
      </ProjectSize>
    </ProjectsContainer>
  );
};

export default Projects