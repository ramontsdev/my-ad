import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.primary.main};
  }

  button {
    cursor: pointer;
  }

  .rootContainer {
    width: 100vw;
    max-width: 1366px;
    height: 100vh;
  }
`
