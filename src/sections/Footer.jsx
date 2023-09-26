import styled from 'styled-components';
import Form from '../components/Form';
import { useTranslation } from "react-i18next";

const ContainerFooter = styled.footer`
    height: 100vh;
    width: 100%;

    background-color: #161616;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
    @media (max-width: 1024px) {
        height: 90vh;
        padding: 1rem;
    }
    @media (max-width: 600px) {
        padding-top: 20rem;
    }
    @media (min-width: 1025px) and (max-width: 1125px) {
        padding: 0rem 2rem 0rem 20rem;
    }
`
const FooterSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleFooter = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    color: white;
    font-weight: 610;
    text-align: center;
`
const DescFooter = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #9e9b9b;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    text-align: center;
`
const CallToWpp = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
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
const CallToEmail = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    text-align: center;
`


const Footer = () => {

const { t } = useTranslation();

return (
        <ContainerFooter id='footer'>
            <FooterSize>
                <TitleFooter>{t("footer.FooterName")}</TitleFooter>
                <DescFooter>{t("footer.FooterDesc")}</DescFooter>
                <CallToWpp>{t("footer.FooterCallToWpp")}</CallToWpp>    
                <EstimatePrice href="https://api.whatsapp.com/send?phone=5521964823939&text=Ol%C3%A1,%20Henrique.%20Gostaria%20de%20um%20or%C3%A7amento!" target='_blank' rel='noreferrer'>{t("footer.MessageWpp")}</EstimatePrice>    
                <CallToEmail>{t("footer.FooterCalToEmail")}</CallToEmail>    
            <Form />
            </FooterSize>
        </ContainerFooter>
)
}

export default Footer