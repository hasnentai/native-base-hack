import { extendTheme } from "native-base";

const nativeBaseHackTheme = extendTheme({
  colors: {
    // Add new color

    primary: {
      50: "#e5fff7",
      100: "#2adacc",
      200: "#26c4b8",
      300: "#22aea3",
      400: "#1d998f",
      500: "#19837a",
      600: "#00b378",
      700: "#115752",
      800: "#0d413d",
      900: "#041614",
    },
    secondary: {
      50: "#b8f1b0",
      100: "#a6d99e",
      200: "#93c18d",
      300: "#81a97b",
      400: "#6e916a",
      500: "#5c7958",
      600: "#374835",
      700: "#253023",
      800: "#121812",
      900: "#000000",
    },
    dark: "#191a19",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});

const navBarTheme = {
  light: { bg: "amber.100" },
  dark: { bg: "coolGray.800" },
};

export { nativeBaseHackTheme, navBarTheme };
