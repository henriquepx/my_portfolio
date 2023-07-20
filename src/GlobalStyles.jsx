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
}

  /* Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Josefin+Sans:wght@300;400;600;700&family=Montserrat:wght@300;500;700;900&family=Poppins:wght@300;400&family=Roboto+Mono:wght@400;500&display=swap');
  
  /* Variables */
  :root {
    --roboto-mono: 'Roboto Mono', monospace;
    --primary-font-montserrat: 'Montserrat', sans-serif;
    --secondary-font-belanosima: 'Belanosima', sans-serif;
    --tertiary-font-poppins: 'Poppins', sans-serif;
    --quaternary-font-josefin: 'Josefin Sans', sans-serif;
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* Add other variables here */
  }
  
`;

export default GlobalStyle;