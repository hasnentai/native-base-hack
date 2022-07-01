import React from "react";
import { NavBar } from "../components/NavBar";
import { Box, useColorMode, Container } from "native-base";
import {
  NativeBaseHackButton,
  NativeBaseHackButtonGroup,
} from "../components/Buttons";
import { navBarTheme } from "../theme/NativeBaseHackTheme";
import NativeBaseHackInput from "../components/Input";
import NativeBaseHackSelect from "../components/DropDown";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  return (
    <div>
      <Box width={"100%"} alignItems="center">
        <Container w={"100%"}>
          <NativeBaseHackButton
            label={"Logout"}
            onPress={() => {
              console.log("hello");
              auth.doSignOut();
            }}
          ></NativeBaseHackButton>
          <NativeBaseHackButtonGroup label={["Edit", "Save"]} />
          <NativeBaseHackInput colorMode={colorMode} />
        </Container>
      </Box>
    </div>
  );
}
