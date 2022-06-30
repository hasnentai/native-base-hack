import React from "react";
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
export function NavBar({ colorMode }) {
  return (
    <Box
      bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
      py={5}
      px={4}
    >
      <Box>
        <Flex alignItems={"center"}>
          <Container width={"100%"}>
            <HStack width={"100%"}>
              <Text fontSize="lg" fontWeight="bold">
                Logo Of App
              </Text>
              <Box ml={"auto"}>
                <HStack>
                  <Text px="10px" fontSize={"md"}>
                    Home
                  </Text>
                  <Text px="10px" fontSize={"md"}>
                    Home
                  </Text>
                  <Text px="10px" fontSize={"md"}>
                    Home
                  </Text>
                  <Text px="10px" fontSize={"md"}>
                    Home
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </Container>
        </Flex>
      </Box>
    </Box>
  );
}
