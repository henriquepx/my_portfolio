import styled from 'styled-components';

const ContainerAbout = styled.div`
    height: 100%;
    width: 100%;

    background-color: #161616;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 2em 15rem 16rem;

    text-align: left;
    @media (min-width: 1025px) and (max-width: 1400px) {
      padding-left: 25rem;
      padding-right: 5rem;
      justify-content: flex-start;
      text-align: left;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 5rem 1rem 5rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
    @media (max-width: 767px) {
      padding: 4rem 1rem 5rem 1rem;
      justify-content: flex-start;
      text-align: left;
    }
`
const AboutSize = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    @media (max-width: 320px) {
      padding-top: 10rem;
    }
`
const TitleAbout = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: white;
    font-weight: 610;
`
const DescAbout = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #9e9b9b;
    margin-top: 30px;
`
const DescriptionAbout = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const DivInfoDescMe = styled.div`
  display: flex;
  flex-direction: column;
`
const AboutPhotoText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px; 
`
const ImgAboutHenrique = styled.img`
  width: 100px;
  border-radius: 20% 70%;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
const LinkAbout = styled.a`
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

const TrajetoyDiv = styled.div`
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    margin: 4rem 0rem 1rem 0rem;
    color: white;
    font-weight: 610;
  }
`

const About = () => {
  return (
    <ContainerAbout id='about'>
        <AboutSize>
          <AboutPhotoText>
            <ImgAboutHenrique src="pic.jpeg" alt="Foto do Henrique" />
            <div>
              <TitleAbout>Sobre o Henrique</TitleAbout>
              <DescriptionAbout>
                <DivInfoDescMe>
                  <DescAbout>Meu nome é Henrique Pinheiro, tenho 21 anos e sou Desenvolvedor de Software Front-end, residente no Rio de Janeiro.</DescAbout>
                  
                  <DescAbout>Na minha adolescência, enquanto passava horas diante do computador, comecei minha jornada criando thumbnails para criadores de conteúdo de Minecraft. Mostrando dedicação sempre que algo me interessava, aprendi rapidamente a mexer no Cinema 4D. Apreciador do design, sempre encontrei prazer em construir aplicações. Por um período, também me aventurei na criação de animações relacionadas ao universo do Minecraft. No entanto, à medida que fui parando de jogar, acabei me distânciando.</DescAbout>
                  <DescAbout>Naquela época, lembro-me de ter solicitado à minha mãe que criasse uma conta no PayPal, ela acabou não dando tanto ideia e tive uma ideia bem peculiar: passei a pedir jogos como forma de pagamento. O resultado? Hoje, muitos dos jogos que possuo na Steam foram obtidos por meio de trocas por trabalhos de criação de thumbnails.</DescAbout>
                  <DescAbout>À medida que o tempo avançava, minhas prioridades começaram a mudar. À medida que encerrava minha fase de jogador ávido de Minecraft, direcionei minha energia para meus estudos no ensino médio e a preparação para o vestibular.</DescAbout>


                  <DescAbout>Desde minha adolescência, encontrei no mundo digital um espaço para minha criatividade, inicialmente criando thumbnails para criadores de conteúdo de Minecraft. Com o tempo, desenvolvi habilidades no Cinema 4D e explorei o design de aplicações. Embora tenha experimentado a criação de animações e outros projetos, minha paixão pelo desenvolvimento me levou a uma jornada mais focada.</DescAbout>
                  <DescAbout>No período do ensino médio, me questionei sobre meu futuro profissional. Considerando alternativas como Engenharia Química, Estatística e Matemática, foi ao explorar a vastidão da web que encontrei a resposta. A decisão de me tornar um Desenvolvedor Front-end, construindo websites e imergindo no mundo da tecnologia, me atraiu de forma irresistível. Minha afinidade com o design e a capacidade de criar soluções digitais atraentes e funcionais se alinharam com essa escolha.</DescAbout>
                  <DescAbout>Minha jornada se intensificou ao ingressar na faculdade de Análise e Desenvolvimento de Sistemas, bem como ao assinar o curso da Alura. Em apenas 30 dias, meu primeiro <LinkAbout href="https://www.linkedin.com/posts/henriquepinheiroxavier_primeiro-per%C3%ADodo-na-faculdade-de-an%C3%A1lise-activity-6924080275446468608-3hl1?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">projeto</LinkAbout> ganhou grande reconhecimento no LinkedIn, fortalecendo minha determinação. Desde então, tenho criado projetos com foco na qualidade e na contínua busca por aperfeiçoamento, ciente de que a aprendizagem constante é a chave para o sucesso.</DescAbout>
                  <DescAbout>A área de tecnologia, e especialmente o Desenvolvimento de Software, exige dedicação à constante atualização. Estou consciente de que a indústria evolui rapidamente, e estou comprometido em estar sempre à frente dessas mudanças. Como profissional, investir tempo em estudo e experimentação é essencial para me manter relevante e competitivo. Acredito que o aprendizado é uma jornada contínua, e estou ansioso para abraçar novos desafios e oportunidades.</DescAbout>
                  <DescAbout>Minha personalidade é caracterizada pela perseverança, resiliência e preparação. Encaro cada obstáculo como uma chance de crescimento, e minha busca pela excelência impulsiona minhas ações diárias. Estou comprometido em contribuir de forma significativa em qualquer equipe e projeto em que eu me envolva.</DescAbout>
                </DivInfoDescMe>
              </DescriptionAbout>
              <TrajetoyDiv>
                <h2>Trajetória</h2>
                <DescAbout>text</DescAbout>
              </TrajetoyDiv>
            </div> 
          </AboutPhotoText>
             
        </AboutSize>
    </ContainerAbout>
  )
}

export default About;