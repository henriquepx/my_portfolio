import styled from 'styled-components'

const ContainerHome = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
      height: 90vh;
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 5.5rem;
      font-weight: 800;

      color: transparent;
      text-align: center;
      line-height: 90px;
      letter-spacing: -8px;
      transform: skew(-10deg);
      transform: skewY(-2deg);
      text-shadow: #b6b5b5 -1px -3px, #3b3b3b -2px -4px, #363636 -3px -5px, #414040 -4px 4px;

      @media (max-width: 450px) {
        font-size: 2.5rem;
      }
        }
    h2 {
      font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        font-weight: 600;
        font-style: italic;
        transform: skew(-10deg);
        transform: skewY(-2deg);
        letter-spacing: 3px;
        text-shadow: #b6b5b5 -1px -3px, #3b3b3b -2px -4px, #363636 -3px -5px, #414040 -4px 4px;
        color: transparent;
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