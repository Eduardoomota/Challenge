import React from "react";
import ReactDOM from "react-dom/client";
import Router from "router";
import GlobalStyle from "styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { CharactersProvider } from "context/Characters";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CharactersProvider>
        <GlobalStyle />
        <Router />
      </CharactersProvider>
    </ThemeProvider>
  </React.StrictMode>
);
