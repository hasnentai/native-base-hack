import { NavBar } from "./components/NavBar";
import logo from "./logo.svg";
import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Container,
  Center,
  Flex,
} from "native-base";

function App() {
  const { colorMode } = useColorMode();

  return <NavBar colorMode={colorMode} />;
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2}>
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        accessibilityLabel={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default App;
