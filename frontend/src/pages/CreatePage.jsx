import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitProduct = async () => {
    const { success, message } = await createProduct(formData);

    toast({
      title: success ? "Product Added" : "Failed to Add",
      description: message,
      status: success ? "success" : "error",
      duration: 3000,
      isClosable: true,
    });

    if (success) {
      setFormData({ name: "", price: "", image: "" });
    }
  };

  return (
    <Container maxW="md">
      <VStack spacing={6}>
        <Heading>Create Product</Heading>

        <Box
          w="100%"
          bg={useColorModeValue("gray.100", "gray.700")}
          p={5}
          rounded="md"
          shadow="base"
        >
          <VStack spacing={4}>
            <Input
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              name="price"
              type="number"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <Input
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleInputChange}
            />
            <Button colorScheme="teal" w="full" onClick={submitProduct}>
              Save Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
