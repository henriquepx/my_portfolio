import styled from 'styled-components';

const ContainerProfile = styled.div`
    position: fixed;
    height: 100%;
    width: 15%;
    left: 0;

    background-color: #222222;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
`
const ProfileApresentation = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const ImgProfile = styled.img`
    border-radius: 50%;
    width: 15%;
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

const Profile = () => {
  return (
    <ContainerProfile>
        <ProfileApresentation>
            <ImgProfile src="profile.jpeg" alt="Foto profile do Henrique" />
            <div>
                <TitleProfile>Henrique Pinheiro</TitleProfile>
                <DescProfile>Desenvolvedor Front-end</DescProfile>
            </div>
        </ProfileApresentation>
    </ContainerProfile>
  )
}

export default Profile;