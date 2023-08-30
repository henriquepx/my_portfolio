import styled from 'styled-components'

const ContainerHome = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 22rem;
    @media (max-width: 1024px) {
      height: 90vh;
      padding: 0;
      text-align: center;
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 4.5rem;
      font-weight: 800;
      margin-bottom: 1rem;

      color: transparent;
      line-height: 90px;
      letter-spacing: -1px;
      text-shadow: #b6b5b5 -1px -3px, #3b3b3b -2px -4px, #363636 -3px -5px, #414040 -4px 4px;

      @media (max-width: 450px) {
        font-size: 2.5rem;
      }
    }
    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #d6d4d4;
    }
`

const Home = () => {
  return (
    <ContainerHome>
      <h1>Desenvolvedor Front-end</h1>
      <p>Jovem entusiasta do Desenvolvimento Front-end.</p>
    </ContainerHome>
  )
}

export default Home