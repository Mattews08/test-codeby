import {
    Box,
    Center,
    Container,
    Flex,
    Stack,
    Image,
    Divider,
    useColorModeValue,
    Heading,
    VStack,
    Button,
    Text
} from '@chakra-ui/react';
import {useEffect, useState} from 'react'
import api from '../service/api'

type IProps = {
    title: string;
    price: number;
    image: string;
    alt: string;
}

type IProduct = {
    items: ITems[];
    totalizers: ITotalizersProps[];
}

type ITems = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    detailUrl: string;
}

type ITotalizersProps = {
    id?: string;
    title: string;
    value: number;
}

const Card = ({title, price, image, alt}: IProps) => {

    return (
        <Box
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{shadow: 'lg'}}
            bg={useColorModeValue('white', 'gray.800')}
            position="relative"
            rounded="md">
            <Flex justifyContent="space-between">
                <Flex>
                    <Image
                        rounded="full"
                        w={16}
                        h={16}
                        objectFit="cover"
                        fallbackSrc={'/assets/images/placeholder.png'}
                        src={image}
                        alt={alt}
                    />
                    <Stack spacing={2} pl={3} align="left">
                        <Heading
                            textAlign="left"
                            fontSize="md"
                        >
                            {title}
                        </Heading>
                        <Heading
                            textAlign="left"
                            fontSize="14px"
                        >
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(price/100)}
                        </Heading>

                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}


const Totalizers = ({title, value}: ITotalizersProps) => {
    return (
        <Flex flexDir="row" justifyContent="space-between">
            <Heading fontSize="2xl">
                {title}
            </Heading>
            <Heading fontSize="2xl">
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(value/100)}
            </Heading>
        </Flex>

    )
}

export const CardProduct = () => {
    const [products, setProducts] = useState<IProduct>()

    // 627c1b1925069545a332c87a json menor que R$ 10
    async function getProduct() {
        const response = await api.get('627c1cb638be29676101c5bb');
        setProducts(response.data);
    }

    useEffect(() => {
        getProduct()
    }, []);

    return (
        <Container>
            <Box p={4}>
                <Center fontSize={22} fontWeight="bold">
                    Meu carrinho
                </Center>
            </Box>

            <Divider mb={3}/>
            <VStack
                spacing={4}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={12}
            >
                {products?.items.map((product) => (
                    <Card key={product.id} title={product.name} price={product.price} image={product.imageUrl}
                          alt={product.detailUrl}
                    />
                ))}
            </VStack>
            <VStack
                spacing={4}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={12}
            >
                {products?.totalizers.filter(obj => obj.id === 'Items').map((total, index) => (
                    <>
                        <Totalizers key={index} title="Total" value={total.value} />
                        {total.value >= 1000 && (
                            <VStack
                                spacing={4}
                                marginBottom={6}
                                align="center"
                                mx={[0, 0, 6]}
                                mt={12}
                                bg="green.200"
                                borderRadius={10}
                                p={3}
                            >
                                <Text color="green.800" fontSize="md" fontWeight="bold">Parabéns, sua compra tem frete
                                    grátis !</Text>
                            </VStack>
                        )}
                    </>
                ))}
            </VStack>
            <VStack
                spacing={4}
                marginBottom={6}
                align="left"
                mx={[0, 0, 6]}
                mt={12}
            >
                <Button colorScheme="blue">Finalizar compra</Button>
            </VStack>

        </Container>
    )
}

