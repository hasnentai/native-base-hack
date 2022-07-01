import { NavBar } from "./components/NavBar";
import { Box, useColorMode, Container } from "native-base";
import {
  NativeBaseHackButton,
  NativeBaseHackButtonGroup,
} from "./components/Buttons";
import { navBarTheme } from "./theme/NativeBaseHackTheme";
import NativeBaseHackInput from "./components/Input";
import NativeBaseHackSelect from "./components/DropDown";
import React from "react";

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
  const [value, setValue] = React.useState("");

  return (
    <Box
      bg={colorMode === "light" ? "warmGray.50" : "blueGray.800"}
      height="100vh"
    >
      <NavBar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        menuList={menu}
        theme={navBarTheme}
      />
      <Box width={"100%"} alignItems="center">
        <Container w={"100%"}>
          <NativeBaseHackButton
            label={"Hello World"}
            onPress={() => {
              console.log("hello");
            }}
          ></NativeBaseHackButton>
          <NativeBaseHackButtonGroup label={["Edit", "Save"]} />
          <NativeBaseHackInput colorMode={colorMode} />
          <NativeBaseHackSelect
            selectedValue={value}
            onValueChange={setValue}
            listItems={listItems}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
