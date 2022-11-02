// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${darkTheme.primary};
    color: ${darkTheme.text};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
