import { Flex, Image, InputGroup, InputLeftElement, Input, Text } from '@chakra-ui/react';

const Controller = ({ placeholder }) => {
    return (
        <Flex>
            <InputGroup>
                <InputLeftElement>
                    <Image src={'/icons/search.png'} />
                </InputLeftElement>
                <Input
                    w={300}
                    placeholder={placeholder}
                    pl={8}
                    _focusVisible={false}
                />
            </InputGroup>

            <Flex gap={2}>
                <Flex alignItems={'center'} gap={2} border={'1px solid #d9d9d9'} py={2} px={3} borderRadius={4} cursor={'pointer'}>
                    <Text> Sort </Text>
                    <Image src={'/icons/sort.png'} />
                </Flex>

                <Flex alignItems={'center'} gap={2} border={'1px solid #d9d9d9'} py={2} px={3} borderRadius={4} cursor={'pointer'}>
                    <Image src={'/icons/download.png'} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export { Controller }
