import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

  :root {
    --purple-600: hsl(246, 80%, 60%);
    --orange-300: hsl(15, 100%, 70%);
    --blue-300: hsl(195, 74%, 62%);
    --pink-400: hsl(348, 100%, 68%);
    --green-400: hsl(145, 58%, 55%);
    --purple-700: hsl(264, 64%, 52%);
    --yellow-300: hsl(43, 84%, 65%);

    --navy-950: hsl(226, 43%, 10%);
    --navy-900: hsl(235, 46%, 20%);
    --purple-500: hsl(235, 45%, 61%);
    --navy-200: hsl(236, 100%, 87%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    background-color: var(--navy-950);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color-scheme: dark;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background-color: var(--navy-950);
    font-family: 'Rubik', sans-serif;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;