import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const ContainerAbout = styled.div`
    height: 100%;
    width: 100%;

    background-color: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 2em 15rem 16rem;

    text-align: left;
    @media (min-width: 1025px) and (max-width: 1400px) {
      padding-left: 25rem;
      padding-right: 5rem;
      justify-content: flex-start;
      text-align: left;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 5rem 1rem 5rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
    @media (max-width: 767px) {
      padding: 4rem 1rem 5rem 1rem;
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
    margin-bottom: .4rem;
    color: white;
    font-weight: 610;
`
const DescAbout = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #9e9b9b;
    margin-top: 1.8rem;
    &:nth-child(1) {
      margin-top: 1rem;
    }
`
const DescriptionAbout = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const DivInfoDescMe = styled.div`
  display: flex;
  flex-direction: column;
`
const AboutPhotoText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px; 
`
const ImgAboutHenrique = styled.img`
  width: 100px;
  border-radius: 20% 70%;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
const LinkAbout = styled.a`
  color: white;
  font-style: italic;
  box-shadow: inset 0 0 0 0 #9e9b9b;
  padding: 0;
  margin: 0;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  &:hover {
    color: #ffffff;
    box-shadow: inset 200px 0 0 0 #9e9b9b;
  }
`
const TextAtt = styled.h3`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  padding-right: 1rem;
  color: #5f5f5f;
  font-size: .8rem;
  margin: 0;
`

const About = () => {

  const { t } = useTranslation();

  return (
    <ContainerAbout id='about'>
        <AboutSize>
          <AboutPhotoText>
            <ImgAboutHenrique src="pic.jpeg" alt="Foto do Henrique" />
            <div>
              <TitleAbout>{t("about.AboutTitle")}</TitleAbout>
              <TextAtt>{t("about.AboutLastAtt")}</TextAtt>
              <DescriptionAbout>
                <DivInfoDescMe>
                  <DescAbout>{t("about.About1")}</DescAbout>
                  <DescAbout>{t("about.About2")}</DescAbout>
                  <DescAbout>{t("about.About3")}</DescAbout>
                  <DescAbout>{t("about.About4A")} <LinkAbout href="https://www.linkedin.com/posts/henriquepinheiroxavier_primeiro-per%C3%ADodo-na-faculdade-de-an%C3%A1lise-activity-6924080275446468608-3hl1?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">{t("about.About4Aproject")}</LinkAbout> {t("about.About4B")}</DescAbout>
                  <DescAbout>{t("about.About5")}</DescAbout>
                  <DescAbout>{t("about.About6")}</DescAbout>
                  <DescAbout>{t("about.About7")}</DescAbout>
                </DivInfoDescMe>
              </DescriptionAbout>
            </div> 
          </AboutPhotoText>
             s
        </AboutSize>
    </ContainerAbout>
  )
}

export default About;