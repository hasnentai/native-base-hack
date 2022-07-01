import { Box, Input } from "native-base";

const NativeBaseHackInput = ({ colorMode }) => {
  return (
    <Box alignItems="center">
      <Input
        mx="3"
        color={colorMode === "light" ? "black" : "white"}
        placeholder="Input"
        w="100%"
        maxWidth="300px"
        m={1}
      />
    </Box>
  );
};

export default NativeBaseHackInput;
