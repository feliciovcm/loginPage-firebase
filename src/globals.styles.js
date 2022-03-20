import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --shape: #ffffff;

    --text: #e1e1e6;
    --gray-300: #d1cdc7;
    --gray-700: #383c3f;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --background: #121214;

    --blue: #61dafb;
    --red: #FF0000;
    --light-red: #FF7F7F;
    --orange: #fe832c;
    --green: #04d361;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px){
      font-size: 93.72%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    background: var(--background);
    color: var(--shape);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5 , h6 , strong {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
 
`;
