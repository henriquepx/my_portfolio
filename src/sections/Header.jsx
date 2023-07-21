import styled from 'styled-components'
import HamburgerMenu from '../components/HamburgerMenu'

const HeaderContainer = styled.header`
    height: 12vh;
    background: linear-gradient(to right, #6cc2b8 50%, #d4d4d4 50%);
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
    font-family: var(--roboto-mono);
    color: #fff;
    padding: 0rem 0rem 0rem 6rem;
`

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderContent>
            <TitleHeader>Henrique</TitleHeader>
            <HamburgerMenu />
        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header