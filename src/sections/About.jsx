import styled from 'styled-components';
import { IoMdMail } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

const ContainerAbout = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
    @media (max-width: 425px) {
      height: 100%;
    }
    @media (max-width: 1024px) {
      padding: 1rem;
    }
`
const AboutSize = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 320px) {
      padding-top: 10rem;
    }
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
const DescriptionAbout = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const InfosAboutMe = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 1150px) {
    gap: 20px;
  }
`
const DivIconsDescAbout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Montserrat', sans-serif;
  color: #707070;
  font-size: 1.1rem;
  a {
    color: #707070;
  }
`
const DivInfoDescMe = styled.div`
  display: flex;
  flex-direction: column;
`

const About = () => {
  return (
    <ContainerAbout id='about'>
        <AboutSize>       
            <TitleAbout>Sobre mim</TitleAbout>
            <DescriptionAbout>
              <DivInfoDescMe>
                <InfosAboutMe>
                  <DivIconsDescAbout>
                    <IoMdMail  />
                    <a href='mailto:henriquepinheiroxavier@gmail.com' target='_blank' rel='noreferrer'>henriquepinheiroxavier@gmail.com</a>
                  </DivIconsDescAbout>
                  <DivIconsDescAbout>
                    <MdLocationOn />
                    <p>Rio de Janeiro, RJ</p>
                  </DivIconsDescAbout>
                </InfosAboutMe> 
                <DescAbout>Comecei a estudar e tive uma conexão direta com o desenvolvimento Front-end, desde então realizo alguns projetos e diariamente busco me aperfeiçoar cada vez mais, aprendendo e entendendo que o estudo constante é a chave pro sucesso.</DescAbout>
                <DescAbout>Construo websites modernos que mudam a cara de qualquer empreendimento. Estou disponível para Freelancer!</DescAbout>
                <DescAbout>Me considero uma pessoa esforçada, resiliente e preparada, busco apenas uma oportunidade para mostrar o quão posso agregar no time e no desenvolvimento da empresa.</DescAbout>
              </DivInfoDescMe>
            </DescriptionAbout>
        </AboutSize>
    </ContainerAbout>
  )
}

export default About;