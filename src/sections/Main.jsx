import styled from 'styled-components'

const MainContainer = styled.main`
  background: linear-gradient(to right, #4831d4 75%, #ccf381 25%);
  height: 65vh;
  display: flex;
  align-items: center;
`
const ContentMain = styled.div`
  padding: 5rem 7rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const IntroTitleMain = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #eef4ed;
`
const TitleMain = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3.4rem;
  color: #eef4ed;
`
const IntroTitleDevMain = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 4rem;
  color: #eef4ed;
  span {
    color: #2eff09;
  }
`
const TecnologyMain = styled.div`
margin-top: 5rem;
  display: flex;
  gap: 150px;
  p {
    max-width: 40ch;
    color: #eef4ed;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
  }
`
const ImgMain = styled.div`
  height: 500px;
  margin-left: 8rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <ContentMain>
          <IntroTitleMain>Olá, me chamo</IntroTitleMain>
          <TitleMain>Henrique Pinheiro</TitleMain>
          <IntroTitleDevMain>Desenvolvedor de Software<br></br><span>Front-end.</span></IntroTitleDevMain>
          <TecnologyMain>
            <p>Possuo habilidades com as tecnologias: ReactJS, Styled Components, JavaScript, TailwindCSS, Sass, Bootstrap, HTML & CSS</p>
            <p>A disciplina e determinação de hoje é o sucesso do amanhã.</p>
          </TecnologyMain>
      </ContentMain>
      <ImgMain>
        <img src="/me.jpeg" alt="Eu" />
      </ImgMain>
    </MainContainer>
  )
}

export default Main