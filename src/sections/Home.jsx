import styled from 'styled-components';
import { BsArrowUpRight } from 'react-icons/bs';
import { useTranslation } from "react-i18next";


const ContainerHome = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 25rem;
    overflow: hidden;
    position: relative;

    text-align: left;
    @media (min-width: 768px) and (max-width: 1024px) {
      height: 90vh;
      padding: 8rem 1rem 1rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
    @media (max-width: 767px) {
      height: 90vh;
      padding: 4rem 1rem 1rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 4.1rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #f2f2f2;
      @media (min-width: 351px) and (max-width: 450px) {
        font-size: 2.5rem;
      }

      @media (max-width: 350px) {
        font-size: 2.3rem;
      }
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #9e9b9b;
      max-width: 85ch;
      margin-top: 5px;
    }
`
const LinkHome = styled.a`
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
const ArrowToAbout = styled.a`
  display: inline-block;
  margin: 2rem 0;
  font-family: 'Montserrat', sans-serif;
  color: white;
  border-radius: 5px;
  position: relative;
  text-decoration: none;
  
  span {
    position: relative;
    z-index: 2;
    &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: #ffffff;
    bottom: -4px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
    z-index: 1;
  }
  
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
  }
`;
const Faixa = styled.div`
  position: absolute;
  right: -160px;
  overflow: hidden;
  bottom: 70px;
  padding: .8rem 10rem;
  transform: rotate(-45deg);
  background-color: #272727;
  p {
    color: #dad9d9;
  }
`

const Home = () => {

  const { t } = useTranslation();

  return (
    <ContainerHome>
      <h1>{t("home.TitleHome")}</h1>
      <p> {t("home.Home1")}</p>
      <p>{t("home.Home2A")} <LinkHome href="projects">{t("home.Home2Aprojects")}</LinkHome> {t("home.Home2B")} <LinkHome href="footer">{t("home.Home2Bcontact")}</LinkHome> {t("home.Home2C")}</p>
      <ArrowToAbout href="about"><span>{t("home.SeeMore")} <BsArrowUpRight /></span></ArrowToAbout>
      <Faixa>
        <p>{t("home.HomeOpenToWork")}</p>
      </Faixa>
    </ContainerHome>
  )
}

export default Home