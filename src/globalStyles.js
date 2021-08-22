import rem from "services/rem";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;    
  }

  html {
    font-size: 100%;    
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: ${rem(14)};
    font-weight: 400;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background}
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.1;
    margin: 0;
  }
`;

const priamry = {
  green: "hsl(163, 72%, 41%)",
  red: "hsl(356, 69%, 56%)",
  facebook: "hsl(208, 92%, 53%)",
  twitter: "hsl(203, 89%, 53%)",
  instagram: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  youtube: "hsl(348, 97%, 39%)",
};

export const darkTheme = {
  background: "hsl(230, 17%, 14%)",
  topBgPattern: "hsl(232, 19%, 15%)",
  cardBg: "hsl(228, 28%, 20%)",
  text1: "hsl(228, 34%, 66%)",
  text2: "hsl(0, 0%, 100%)",
  toggle: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
  hover: "hsla(228, 26%, 27%, 1)",
  ...priamry,
};

export const lightTheme = {
  background: "hsl(0, 0%, 100%)",
  topBgPattern: "hsl(225, 100%, 98%)",
  cardBg: "hsl(227, 47%, 96%)",
  text1: "hsl(228, 12%, 44%)",
  text2: "hsl(230, 17%, 14%)",
  toggle: "hsl(230, 22%, 74%)",
  hover: "hsla(232, 33%, 91%, 1)",
  ...priamry,
};
