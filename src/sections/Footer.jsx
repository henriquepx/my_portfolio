import styled from 'styled-components'
import Form from '../components/Form'

const ContainerFooter = styled.footer`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
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
    margin-bottom: 2rem;
    color: white;
    font-weight: 610;
`

const Footer = () => {
return (
        <ContainerFooter id='footer'>
            <FooterSize>
                <TitleFooter>Contact</TitleFooter>
                <Form />
            </FooterSize>
        </ContainerFooter>
)
}

export default Footer