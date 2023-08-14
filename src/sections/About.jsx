import styled from 'styled-components';
import LinkNavegation from '../components/LinkNavegation';
import {  FaCode,  FaDesktop } from 'react-icons/fa'; 


const ContainerAbout = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
`
const AboutSize = styled.div`
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
`
const TitleAbout = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: white;
    font-weight: 610;
`
const DescAbout = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #707070;
    margin-top: 15px;
`
const NavAbout = styled.nav`
    margin-top: 1rem;
    ul {
        display: flex;
        gap: 20px;
    }
`

const About = () => {
  return (
    <ContainerAbout id='about'>
        <AboutSize>       
            <TitleAbout>About</TitleAbout>
            <DescAbout>Olá, me chamo Henrique, tenho 21 anos e sou graduando de Análise e Desenvolvimento de Sistemas.</DescAbout>
            <DescAbout>Comecei a estudar e tive uma conexão direta com o desenvolvimento Front-end, desde então realizo alguns projetos e diariamente busco me aperfeiçoar cada vez mais, aprendendo e entendendo que o estudo constante é a chave pro sucesso.</DescAbout>
            <DescAbout>Me considero uma pessoa esforçada, resiliente e preparado, busco apenas uma oportunidade para mostrar o quão posso agregar no time e no desenvolvimento da empresa.</DescAbout>
            <DescAbout>Veja abaixo meus projetos e minhas skills:</DescAbout>
            <NavAbout>
                <ul>
                    <LinkNavegation
                        icon={<FaCode />}
                        name="Skills"
                        link="#skills"
                        
                    />
                        <LinkNavegation
                        icon={<FaDesktop />}
                        name="Front-end"
                        link="#frontend"
                    />
                </ul>
            </NavAbout>
        </AboutSize>
    </ContainerAbout>
  )
}

export default About;