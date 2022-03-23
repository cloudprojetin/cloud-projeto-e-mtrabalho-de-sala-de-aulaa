import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --font-xs: 0.75rem;
    --font-sm: 1rem;
    --font-md: 1.25rem;
    --font-lg: 1.5rem;
    --font-xl: 2.5rem;
    --border-radius: 10px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body {
    background: #333;
    color: white;
    --webkit-font-smoothing: antialiased;
    transition: all 0.2s;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: var(--font-sm);
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
