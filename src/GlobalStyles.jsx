import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  scroll-behavior: smooth;
  vertical-align: baseline;
  list-style: none;
  text-decoration: none;
  line-height: 1.4;
  ::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
}

/* Estilização da alça (polegar) da barra de rolagem */
::-webkit-scrollbar-thumb {
    background-color: #dadada; /* Cor da alça */
}

/* Estilização do fundo da barra de rolagem (trilha) */
::-webkit-scrollbar-track {
    background-color: #1f1e1e; /* Cor da trilha */
}
}

  /* Variables */
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
  }

  /* 
  font-family: 'Belanosima', sans-serif;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto Mono', monospace;
  */

  /*
  PALETA DE CORES:
  #134074;
  #13315c;
  #0b2545;
  #00171f;
  #8da9c4;
  #eef4ed;
  */
  
`;

export default GlobalStyle;