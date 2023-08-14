import styled from 'styled-components';

const ProjectsContainer = styled.div`
    height: 100vh;
    width: 100%;

    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 17rem;
`
const ProjectSize = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
        <ProjectSize>

        </ProjectSize>
    </ProjectsContainer>
  )
}

export default Projects