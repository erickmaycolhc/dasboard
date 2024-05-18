"use client";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import DarkTheme from "../theme/darkTheme";
import LightTheme from "../theme/lightTheme";
import ThemeToggleButton from "@/components/themeToggleButton/ThemeToggleButton";
import Header from "@/components/header/Header";
import Layout from "@/components/layout/Layout";

type Props = {
  children: React.ReactNode;
};

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const NextThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...DarkTheme,
      }),
    [mode]
  );
  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...LightTheme,
      }),
    [mode]
  );

  return (
    <>
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider
          theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
        >
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext} />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};
