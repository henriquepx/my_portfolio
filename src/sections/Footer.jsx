import styled from 'styled-components'
import Form from '../components/Form'

    const ContainerFooter = styled.footer`
        height: 70vh;
        width: 100%;
        background-color: black;
        
        display: flex;
        align-items: center;
    `
    const ContainerContactFooter = styled.div`
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 2rem 0rem 3rem 8rem;
    `
    const TitleFooter = styled.h1`
        font-family: var(--quaternary-font-josefin);
        color: white;
        font-size: 2.3rem;
        font-weight: 750;
        margin-bottom: 1.3rem;
    `
     const SubitleFooter = styled.h1`
        font-family: var(--roboto-mono);
        color: white;
        font-size: 1.3rem;
    `
    const Links = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;

        margin-top: 5rem;
    `
    const Link = styled.a`
        color: white;
        font-family: var(--roboto-mono);
        font-size: 1.05rem;
        position: relative;
        width: 75px;
        &:after {
            content: '';
            position: absolute;
            width: 0px;
            height: 2px;
            bottom: -3px;
            left: 0;
            background: linear-gradient(65deg, #59777c 0%, #477771 100%, rgba(255, 209, 0, 0) 100%);
            transition: .4s ease-in-out;
        }
        &:hover::after{
            width: 75px;
        }
    `
    const LinkEmail = styled.a `
        position: relative;
        font-family: var(--roboto-mono);
        font-size: 1.3rem;
        width: 380px;

        z-index: 0;
        position: relative;
        color: white;
        &::after {
            transition: all .25s ease-in-out;
            content: "";
            position: absolute;
            bottom: 7.5%;
            z-index: -1;
            height: 0.3em;
            width: 380px;
            left: -1%;
            background: linear-gradient(65deg, #59777c 0%, #477771 100%, rgba(255, 209, 0, 0) 100%);
        }
        &:hover&::after {
            transition: all .25s ease-in-out;
            height: 0.9em;
        }
    `

const Footer = () => {
return (
        <ContainerFooter>
            <ContainerContactFooter>
                <TitleFooter>Disponível para oportunidades e preparado pra qualquer desafio.</TitleFooter>
                <SubitleFooter>Acha que posso agregar pra sua empresa ou precisa de ajuda em uma demanda? Mande uma mensagem no formulário ao lado.</SubitleFooter>
                <Links>
                    <LinkEmail href="mailto:henriquepinheiroxavier@gmail.com">henriquepinheiroxavier@gmail.com</LinkEmail>
                    <Link target='_blank' href="https://www.linkedin.com/in/henriquepinheiroxavier/">LinkedIn</Link>
                    <Link target='_blank' href="https://github.com/henriquepx">Github</Link>
                    <Link target='_blank' href="https://wa.me/5521964823939?text=Olá!%20Gostaria%20de%20entrar%20em%20contato.">Contato</Link>
                </Links>
            </ContainerContactFooter>
            <Form />
        </ContainerFooter>
)
}

export default Footer