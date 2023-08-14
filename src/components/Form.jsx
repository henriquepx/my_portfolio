import styled from 'styled-components';
import { useRef  } from 'react';
import emailjs from '@emailjs/browser';

const ContainerForm = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
`
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: #FFF;
    width: 100%;
    max-width: 600px; 
    margin: 0 auto;
`
const LabelForm = styled.label`
    margin-bottom: 7px;
    font-family: 'Roboto Mono', monospace;
`

const InputStyle = styled.input`
    margin-bottom: 14px;
    border-radius: 4px;
    height: 40px;
    width: 100%; 
    padding: 0 8px;
    font-family: 'Roboto Mono', monospace;
`
const TextareaStyle = styled.textarea`
    margin-bottom: 14px;
    border-radius: 4px;
    font-family: 'Roboto Mono', monospace;
    border: 0;
    padding: 8px;
    height: 200px;
    width: 100%;
    resize: none;
`
const ButtonSubmitForm = styled.button`
    height: 34px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    background-color: #3f3f3f;
    font-size: 1rem;
    width: 30%;
    color: #fff;
    font-family: 'Roboto Mono', monospace;
`

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_prhx52s', 'template_qon6s7h', form.current, '6XCPVQDlEI-egjo2f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

    return (
        <ContainerForm>
            <FormStyle ref={form} onSubmit={sendEmail}>
                <LabelForm htmlFor="user_name">Nome:</LabelForm>
                <InputStyle 
                    type="text"
                    placeholder="Digite seu nome"
                    name="user_name"
                    id="user_name"
                />
                <LabelForm htmlFor="user_email">E-mail:</LabelForm>
                <InputStyle 
                    type="text"
                    placeholder="Digite seu email"
                    name="user_email"
                    id="user_email"
                />
                <LabelForm htmlFor="message">Mensagem:</LabelForm>
                <TextareaStyle 
                    placeholder="Digite sua mensagem..."
                    name="message"
                    id="message"
                />

                <ButtonSubmitForm type="submit" value="Send">Enviar</ButtonSubmitForm>
            </FormStyle>
        </ContainerForm>
    );
}

export default Form;
