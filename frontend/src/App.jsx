import { Box, Button, VStack, Heading } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
