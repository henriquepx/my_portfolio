import styled from 'styled-components'
import Form from '../components/Form'

    const ContainerFooter = styled.footer`
        height: 100vh;
        width: 100%;
        background-color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: center;

        padding-left: 15rem;
    `

const Footer = () => {
return (
        <ContainerFooter id='footer'>
            <Form />
        </ContainerFooter>
)
}

export default Footer