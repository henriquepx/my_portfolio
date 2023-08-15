import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 10vh;
    width: 100%;

    background-color: #1a1a1a;
    

    padding: 1rem 2rem;
`
const HeaderSize = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ProfileApresentation = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 1rem;
`
const ImgProfile = styled.img`
    border-radius: 50%;
    width: 3%;
`
const TitleProfile = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #d6d4d4;
`
const DescProfile = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    color: #6b6b6b;
`
const MenuHamburger = styled.div`
    cursor: pointer;

    border: 1px solid #d6d4d4;
    padding: 3px 5px;
    border-radius: 10px;
    span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3 ease-in-out;
        transition: all 0.3 ease-in-out;
        background-color: #3f3e3e;
    }
`
const Header = () => {
  return (
    <HeaderContainer>
        <HeaderSize>
            <ProfileApresentation>
                <ImgProfile src="profile.jpeg" alt="Foto profile do Henrique" />
                <div>
                    <TitleProfile>Henrique Pinheiro</TitleProfile>
                    <DescProfile>Desenvolvedor Front-end</DescProfile>
                </div>
            </ProfileApresentation>
            <MenuHamburger>
                <span></span>
                <span></span>
                <span></span>
            </MenuHamburger>
        </HeaderSize>
    </HeaderContainer>
  )
}

export default Header