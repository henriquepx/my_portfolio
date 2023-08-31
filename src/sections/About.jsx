import styled from 'styled-components';
import { IoMdMail } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

const ContainerAbout = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;

    text-align: left;
    @media (max-width: 1024px) {
      height: 100%;
      padding: 5rem 1rem 5rem 1rem;
      justify-content: flex-start;
      text-align: left;
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
    margin-bottom: 1rem;
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
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
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
            <TitleAbout>Sobre o Henrique</TitleAbout>
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
                <DescAbout>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ad culpa nemo officiis, maiores amet voluptate tenetur quis incidunt aperiam ea a inventore harum debitis quos soluta asperiores obcaecati. Fuga, ab. Omnis eius modi laborum. Repudiandae velit quidem dolore, odio et deleniti quos est maiores cumque delectus amet maxime. Corporis?</DescAbout>
                <DescAbout>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ad culpa nemo officiis, maiores amet voluptate tenetur quis incidunt aperiam ea a inventore harum debitis quos soluta asperiores obcaecati. Fuga, ab. Omnis eius modi laborum. Repudiandae velit quidem dolore, odio et deleniti quos est maiores cumque delectus amet maxime. Corporis?</DescAbout>
                <DescAbout>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ad culpa nemo officiis, maiores amet voluptate tenetur quis incidunt aperiam ea a inventore harum debitis quos soluta asperiores obcaecati. Fuga, ab. Omnis eius modi laborum. Repudiandae velit quidem dolore, odio et deleniti quos est maiores cumque delectus amet maxime. Corporis?</DescAbout>
                <DescAbout>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ad culpa nemo officiis, maiores amet voluptate tenetur quis incidunt aperiam ea a inventore harum debitis quos soluta asperiores obcaecati. Fuga, ab. Omnis eius modi laborum. Repudiandae velit quidem dolore, odio et deleniti quos est maiores cumque delectus amet maxime. Corporis?</DescAbout>
              </DivInfoDescMe>
            </DescriptionAbout>
        </AboutSize>
    </ContainerAbout>
  )
}

export default About;