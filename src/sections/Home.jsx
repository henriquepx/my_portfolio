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
    @media (max-width: 1024px) {
      padding: 1rem;
    }
`

const Home = () => {
  return (
    <ContainerHome>Home</ContainerHome>
  )
}

export default Home