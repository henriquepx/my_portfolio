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
        <DescriptionProject>Bem-vindo ao meu portfólio de projetos! Aqui, você encontrará uma coleção de trabalhos que representam minha paixão e dedicação ao mundo da programação. Cada projeto é uma expressão da minha criatividade e habilidades técnicas, cuidadosamente desenvolvidos para oferecer soluções práticas e funcionais.<br /><br />Explore esses projetos abaixo e sinta-se à vontade para entrar em contato caso deseje solicitar um orçamento. Estou animado para trabalhar em novos desafios e transformar suas ideias em realidade.</DescriptionProject>
        <EstimatePrice href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Gostaria%20de%20um%20or%C3%A7amento!" target='_blank' rel='noreferrer'>Fazer um orçamento</EstimatePrice>
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