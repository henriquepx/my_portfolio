import styled from 'styled-components'

const ContainerHome = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 5.5rem;
      font-weight: 800;
      text-align: center;
      transform: skewY(-2deg);
      letter-spacing: 3px;
      color: #504f4f;
      @media (max-width: 450px) {
        font-size: 2.5rem;
      }
        }
    h2 {
      font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        font-weight: 600;
        font-style: italic;
        transform: skewY(-2deg);
        letter-spacing: 3px;
        color: #504f4f;
        @media (max-width: 450px) {
        font-size: 1.5rem;
        text-align: center;
      }
    }

    @media (max-width: 1024px) {
      padding: 1rem;
    }
`

const Home = () => {
  return (
    <ContainerHome>
      <h1>Henrique Pinheiro</h1>
      <h2>Desenvolvedor Front-end</h2>
    </ContainerHome>
  )
}

export default Home