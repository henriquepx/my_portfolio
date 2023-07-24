import styled from 'styled-components'
import HamburgerMenu from '../components/HamburgerMenu'

const HeaderContainer = styled.header`
    height: 12vh;
    background: #e4e4e4;
    display: flex;
    align-items: center;
`
const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TitleHeader = styled.h1`
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    color: #000000;
    font-size: 1.5rem;
    padding: 0rem 0rem 0rem 6rem;
`

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <TitleHeader>HenriqueDev</TitleHeader>
            <HamburgerMenu />
        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header