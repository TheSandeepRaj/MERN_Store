import React from "react";
import {
  Container,
  Flex,
  HStack,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"; //
import { color } from "framer-motion";

import { FaRegPlusSquare } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="container.xl" p={{ base: 2, md: 4 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        h={{ base: "auto", md: 16 }}
        gap={{ base: 2, md: 0 }}
      >
        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          textTransform="uppercase"
          bgGradient="linear(to-l, #5c1d9bff, #5f075cff)"
          bgClip="text"
          mb={{ base: 2, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Link to="/">E-Store 🛒</Link>
        </Text>
        <HStack spacing={{ base: 2, md: 4 }} mt={{ base: 2, md: 0 }}>
          <Link to="/create">
            <Button
              colorScheme="purple"
              variant="solid"
              size={{ base: "sm", md: "md" }}
            >
              <FaRegPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode} size={{ base: "sm", md: "md" }}>
            {colorMode === "light" ? (
              <IoMoon fontSize={20} />
            ) : (
              <LuSun fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
