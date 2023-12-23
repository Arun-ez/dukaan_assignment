import { Flex, Image, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"

const Navbar = () => {

    return (
        <Flex borderBottom={'1px solid #D9D9D9'} h={'70px'} w={'100%'} px={6} alignItems={'center'}>

            <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} gap={1} >
                <Image src={'/icons/help.png'} h={5} />
                <Text color={'#4d4d4d'} fontSize={13}> How it works </Text>
            </Flex>

            <Flex w={'100%'} justifyContent={'center'}>
                <InputGroup>
                    <InputLeftElement>
                        <Image src={'/icons/search.png'} />
                    </InputLeftElement>
                    <Input
                        w={450}
                        placeholder="Search features, tutorials etc."
                        pl={8} bg={'#f2f2f2'}
                        border={'none'}
                        _focusVisible={false}
                    />
                </InputGroup>
            </Flex>

            <Flex w={'100%'} justifyContent={'flex-end'}>
                <Image src={'/icons/menu.png'} h={10} />
            </Flex>

        </Flex>
    )
}

export { Navbar }
