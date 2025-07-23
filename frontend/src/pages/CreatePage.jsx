// import React from "react";
import {
	Box,
	Button,
	Container,
	VStack,
	Heading,
	Input,
	useToast,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/icons";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const toast = useToast();
	const navigate = useNavigate();

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				isClosable: true,
				status: "error",
			});
		} else {
			toast({
				title: "Success",
				description: message,
				isClosable: true,
				status: "success",
			});
		}
		setNewProduct({
			name: "",
			price: "",
			image: "",
		});
		navigate("/");
	};

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>
				<Box
					w={"full"}
					bg={useColorModeValue("gray.200", "gray.700")}
					p={6}
					rounded={"lg"}
					shadow={"md"}
				>
					<VStack spacing={4} alignItems={"stretch"}>
						<Input
							placeholder="Product Name"
							name="name"
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
						/>
						<Input
							placeholder="Product Price"
							name="price"
							type="number"
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({ ...newProduct, price: e.target.value })
							}
						/>
						<Input
							placeholder="Product Image URL"
							name="image"
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({ ...newProduct, image: e.target.value })
							}
						/>

						<Button colorScheme="blue" onClick={handleAddProduct} w="full">
							Add product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreatePage;
