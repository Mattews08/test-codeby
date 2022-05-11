import Head from "next/head";
import { NavBar } from './NavBar';
import { Box, Container } from "@chakra-ui/react";
import {ReactNode} from "react";

const variant = {
    hidden: {opacity: 0, x: 0, y: 20},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 20}
}

type IProps = {
    children: ReactNode
}

export const Layout = ({children}: IProps) => (
    <Box>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Matheus Lima - Shopping Cart</title>
        </Head>
        <NavBar />
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
)