import {
	Button,
	Container,
	Flex,
	HStack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				align={"center"}
				justify={"space-between"}
				flexDir={{ base: "column", sm: "row" }}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, blue.400, orange.200)"}
					bgClip={"text"}
				>
					<Link to="/">Product Store 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to="/create">
						<Button>
							<FaPlus fontSize={20} />
						</Button>
					</Link>
					<Button
						onClick={toggleColorMode}
						bgGradient={
							colorMode === "light"
								? "linear(to-r, blue.400, orange.200)"
								: "linear(to-r, gray.700, purple.500)"
						}
						color="white"
						leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					>
						{colorMode === "light" ? "Night Shift" : "Daylight"}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;
