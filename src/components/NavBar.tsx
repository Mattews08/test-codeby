import {Box, Container, Flex, Heading, useColorModeValue} from "@chakra-ui/react";
import {ThemeToggleButton} from "./ThemeToggleButton";

export const NavBar = () => {
    const logo = `/assets/logo.png`

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#fff', '#202023')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                alignItems="center"
                flexWrap="wrap"
                justifyContent="space-between"
            >
                <Box mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    </Heading>
                </Box>
                <Box alignContent="right">
                    <ThemeToggleButton/>
                </Box>
            </Container>
        </Box>
    )
}