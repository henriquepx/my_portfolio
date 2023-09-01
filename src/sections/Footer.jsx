import styled from 'styled-components'
import Form from '../components/Form'

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
`
const FooterSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
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
    margin-bottom: 2.5rem;
    font-size: 1.1rem;
    text-align: center;
`

const Footer = () => {
return (
        <ContainerFooter id='footer'>
            <FooterSize>
                <TitleFooter>Contact</TitleFooter>
                <DescFooter>Tem uma dúvida, proposta ou quer apenas conversar? Mande uma mensagem.</DescFooter>
                <Form />
            </FooterSize>
        </ContainerFooter>
)
}

export default Footer