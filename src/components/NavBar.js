import React from "react";
import { Box, Text, HStack, Container, Flex } from "native-base";
import { NativeBaseHackButton } from "./Buttons";

export function NavBar({ colorMode, menuList, toggleColorMode }) {
  console.log(colorMode);
  return (
    <Box
      bg={colorMode === "light" ? "primary.600" : "coolGray.900"}
      py={5}
      px={4}
      borderBottomWidth="1"
      borderBottomColor={colorMode === "light" ? "gray.300" : "gray.700"}
    >
      <Box>
        <Flex alignItems={"center"}>
          <Container width={"100%"}>
            <HStack width={"100%"} alignItems="center">
              <Text color={"white"} fontSize="lg" fontWeight="bold">
                Logo Of App
              </Text>
              <Box ml={"auto"}>
                <HStack alignItems={"center"}>
                  {menuList.map((d, i) => (
                    <Text key={i} color={"white"} px="10px" fontSize={"md"}>
                      {d}
                    </Text>
                  ))}
                  <NativeBaseHackButton
                    onPress={toggleColorMode}
                    label="Change Theme"
                    variant="solid"
                    colorScheme={colorMode === "light" ? "tertiary" : "primary"}
                  />
                </HStack>
              </Box>
            </HStack>
          </Container>
        </Flex>
      </Box>
    </Box>
  );
}
