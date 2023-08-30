import styled from 'styled-components';
import { BsArrowUpRight } from 'react-icons/bs';

const ContainerHome = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 25rem;

    text-align: left;
    @media (max-width: 1024px) {
      height: 90vh;
      padding: 1rem;
      text-align: left;
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 4.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #f2f2f2;
      @media (min-width: 351px) and (max-width: 450px) {
        font-size: 2.5rem;
      }

      @media (max-width: 350px) {
        font-size: 2.3rem;
      }
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #9e9b9b;
      max-width: 85ch;
      margin-top: 5px;
    }
`
const LinkHome = styled.a`
  color: white;
  font-style: italic;
  box-shadow: inset 0 0 0 0 #9e9b9b;
  padding: 0;
  margin: 0;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  &:hover {
    color: #ffffff;
    box-shadow: inset 200px 0 0 0 #9e9b9b;
  }
`
const ArrowToAbout = styled.a`
  display: inline-block;
  margin: 2rem 0;
  font-family: 'Montserrat', sans-serif;
  color: white;
  border-radius: 5px;
  position: relative;
  text-decoration: none;
  
  span {
    position: relative;
    z-index: 2;
    &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: #ffffff;
    bottom: -4px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
    z-index: 1;
  }
  
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
  }
`;

const Home = () => {
  return (
    <ContainerHome>
      <h1>Desenvolvedor Front-end</h1>
      <p>Jovem desenvolvedor especializado na construção de experiências digitais excepcionais. Com proficiência nos frameworks mais utilizados pra Web, concentro-me em transformar ideias em realidade, criando interfaces intuitivas e atraentes.</p>
      <p>Navegue por meu portfólio para descobrir os <LinkHome href="#">projetos</LinkHome> que tenho orgulho de ter contribuído. Estou comprometido em demonstrar como minha paixão pelo desenvolvimento Front-end se traduz em resultados concretos. E caso queira ter esse Desenvolvedor Front-end na sua equipe ou realizar um trabalho Freelancer, basta entrar em <LinkHome href="">contato</LinkHome> e vamos ao trabalho.</p>
      <ArrowToAbout href="about"><span>Veja mais sobre mim <BsArrowUpRight /></span></ArrowToAbout>
    </ContainerHome>
  )
}

export default Home