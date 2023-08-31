import { useState, useEffect } from 'react';
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
    overflow: hidden;
    position: relative;

    text-align: left;
    @media (min-width: 768px) and (max-width: 1024px) {
      height: 90vh;
      padding: 8rem 1rem 1rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
    @media (max-width: 767px) {
      height: 90vh;
      padding: 4rem 1rem 1rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 4.1rem;
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
const Faixa = styled.div`
  position: absolute;
  right: -160px;
  overflow: hidden;
  bottom: 70px;
  padding: .8rem 10rem;
  transform: rotate(-45deg);
  background-color: #272727;
  p {
    color: #dad9d9;
  }
`

const Home = () => {

  const [typedText, setTypedText] = useState('');
  const titleText = "Desenvolvedor Front-end";
  const typingSpeed = 100; 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setTypedText(titleText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <ContainerHome>
      <h1>{typedText}</h1>
      <p>Jovem desenvolvedor especializado na construção de experiências digitais excepcionais. Com proficiência nos frameworks mais utilizados pra Web, tenho foco em transformar ideias em realidade, criando interfaces intuitivas e atraentes.</p>
      <p>Navegue pelo meu portfólio para descobrir os <LinkHome href="projects">projetos</LinkHome> que tenho orgulho de ter contribuído. Estou comprometido em demonstrar como minha paixão pelo desenvolvimento Front-end se traduz em resultados concretos. E caso queira ter esse Desenvolvedor Front-end na sua equipe ou realizar um trabalho Freelancer, basta entrar em <LinkHome href="footer">contato</LinkHome> e vamos ao trabalho.</p>
      <ArrowToAbout href="about"><span>Veja mais sobre mim <BsArrowUpRight /></span></ArrowToAbout>
      <Faixa>
        <p>Disponível pra trabalhos.</p>
      </Faixa>
    </ContainerHome>
  )
}

export default Home