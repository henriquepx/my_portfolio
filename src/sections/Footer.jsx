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
        padding-top: 5rem;
        height: 100%;
        padding-bottom: 2rem;
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


const Footer = () => {

const { t } = useTranslation();

return (
        <ContainerFooter id='footer'>
            <FooterSize>
                <TitleFooter>{t("footer.FooterName")}</TitleFooter>
                <DescFooter>{t("footer.FooterDesc")}</DescFooter> 
            <Form />
            </FooterSize>
        </ContainerFooter>
)
}

export default Footer