import { Box, useColorMode } from "native-base";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import { auth } from "./firebase";

//views
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import { NavBar } from "./components/NavBar";
import { navBarTheme } from "./theme/NativeBaseHackTheme";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  let menu = ["Home", "About Us", "Contact", "Hire Me"];
  let listItems = [
    { label: "UI Designer", value: "uid" },
    { label: "UI Designer", value: "uid" },
    { label: "UI Designer", value: "uid" },
    { label: "UI Designer", value: "uid" },
    { label: "UI Designer", value: "uid" },
  ];
  React.useEffect(() => {
    auth.CheckSession((user) => {
      if (user) {
        console.log(user, "login hai");
      } else {
        console.log("naa not login");
      }
    });
  }, []);

  return (
    <Box
      bg={colorMode === "light" ? "warmGray.50" : "coolGray.900"}
      height="100vh"
    >
      <NavBar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        menuList={menu}
        theme={navBarTheme}
      />
      <BrowserRouter>
        <Routes>
          <Route exact path={routes.LANDING} element={<LandingPage />} />
          <Route exact path={routes.SIGN_IN} element={<SignIn />} />
          <Route exact path={routes.SIGN_UP} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
