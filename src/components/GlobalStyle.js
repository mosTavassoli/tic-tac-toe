import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0 ;
    outline: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing : border-box;        
}
`;
