import { darkTheme, GlobalStyle, lightTheme } from "globalStyles";
import React, { useEffect, useState } from "react";
import FollowerInfo from "sections/FollowersInfo/index";
import Header from "sections/Header/index";
import Overview from "sections/Overview/index";
import { followersInfo } from "data.json";
import styled, { ThemeProvider } from "styled-components";
import rem from "services/rem";

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media only Screen and (max-width: ${rem(1024)}) {
    max-width: ${rem(768)};
  }

  @media only Screen and (max-width: ${rem(768)}) {
    max-width: ${rem(425)};
  }
`;

const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [checked]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header checked={checked} setChecked={setChecked} />
        <FollowerInfo stats={followersInfo} />
        <Overview />
      </Container>
    </ThemeProvider>
  );
};

export default App;
