import styled from 'styled-components';
import { useRef  } from 'react';
import emailjs from '@emailjs/browser';

const ContainerForm = styled.div`

   width: 100%;
`
const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    color: #FFF;
`
const LabelForm = styled.label`
    margin-bottom: 7px;
    font-family: 'Montserrat', monospace;
`

const InputStyle = styled.input`
    margin-bottom: 14px;
    border-radius: 4px;
    height: 40px;
    color: #fff;
    width: 100%; 
    padding: 0 8px;
    font-family: 'Montserrat', monospace;
    background-color: transparent;
    border: 1px solid white;
`
const TextareaStyle = styled.textarea`
    margin-bottom: 14px;
    border-radius: 4px;
    font-family: 'Montserrat', monospace;
    border: 0;
    padding: 8px;
    background-color: transparent;
    border: 1px solid white;
    height: 200px;
    width: 100%;
    color: #fff;
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
    font-family: 'Montserrat', monospace;
`

const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_webqtko', 'template_kxj8ru8', form.current, '6XCPVQDlEI-egjo2f')
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
                    name="from_name"
                    id="user_name"
                />
                <LabelForm htmlFor="user_email">E-mail:</LabelForm>
                <InputStyle 
                    type="text"
                    placeholder="Digite seu email"
                    name="reply_to"
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
