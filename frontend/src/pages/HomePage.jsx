import React from "react";
import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	console.log("Products: ", products);
	return (
		<Container maxW="container.xl" py={12}>
			<Text mb={6}>
				This is a simple e-commerce application built with the MERN (MongoDB,
				Express, React, Node.js) tech stack. It uses the Chakra UI component
				library for the user interface, and React Router to handle client-side
				routing. The application state is managed with the zustand state
				management library.
			</Text>
			<VStack spacing={8}>
				<Text
					fontSize="30"
					fontWeight="bold"
					bgGradient="linear(to-r, blue.400, orange.200)"
					bgClip="text"
					textAlign="center"
				>
					Current Products 🚀
				</Text>

				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text
						fontSize={"xl"}
						textAlign={"center"}
						fontWeight="bold"
						color="gray.500"
					>
						No products found 😢{" "}
						<Link to="/create">
							<Text
								as="span"
								color="blue.500"
								_hover={{ textDecoration: "underline" }}
							>
								Create a new product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};

export default HomePage;
