import styled from 'styled-components';
import { useRef  } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

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
    padding: 15px 8px;
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
    margin: 0 auto;
    width: 30%;
    color: #fff;
    font-family: 'Montserrat', monospace;
`
const NameEmail = styled.div`
    display: flex;
    gap: 50px;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0px;
    }
`
const EveryInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Form = () => {

    const { t } = useTranslation();

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
                <NameEmail>
                    <EveryInput>
                        <LabelForm htmlFor="user_name">{t("contact.ContactName")}</LabelForm>
                        <InputStyle 
                            type="text"
                            placeholder={t("contact.ContactPlaceName")}
                            name="from_name"
                            id="user_name"
                        />
                    </EveryInput>
                    <EveryInput>
                    <LabelForm htmlFor="user_email">E-mail:</LabelForm>
                    <InputStyle 
                        type="text"
                        placeholder={t("contact.ContactPlaceEmail")}
                        name="reply_to"
                        id="user_email"
                    />
                    </EveryInput>
                </NameEmail>
                <LabelForm htmlFor="message">{t("contact.ContactMessage")}</LabelForm>
                <TextareaStyle 
                    placeholder={t("contact.ContactPlaceMessage")}
                    name="message"
                    id="message"
                />

                <ButtonSubmitForm type="submit" value="Send">{t("contact.Submit")}</ButtonSubmitForm>
            </FormStyle>
        </ContainerForm>
    );
}

export default Form;
