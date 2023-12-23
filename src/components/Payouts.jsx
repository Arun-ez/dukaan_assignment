import { Stack, Flex, Text, Image, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Controller } from "./Controller";

const formatAmount = (number) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);

    return `${formattedAmount}`;
}

const Payouts = () => {

    const data = [
        { transactionId: '59999594545595', orderAmount: 10125, transactionFees: 1125, isProcessing: true },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
        { transactionId: '49898984479598', orderAmount: 10125, transactionFees: 1125, isProcessing: false },
    ]

    return (
        <Stack>
            <Controller />
            <Table>
                <Thead bg={'#f2f2f2'}>
                    <Tr >
                        <Th w={200}> <Image src="/icons/triangle.png" alt="triangle" /> </Th>
                        <Th textTransform={'none'}> Status </Th>
                        <Th textTransform={'none'} > Transaction ID </Th>
                        <Th textTransform={'none'}> Order amount </Th>
                        <Th textTransform={'none'}> Transaction fees </Th>
                        <Th textTransform={'none'}> Total </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {data.map(({ transactionId, orderAmount, transactionFees, isProcessing }, index) => (
                        <Tr key={index}>
                            <Td>  </Td>
                            <Td>
                                {isProcessing ? (
                                    <Flex alignItems={'center'} gap={2}>
                                        <Image src={'/icons/processing.png'} />
                                        <Text> Processing </Text>
                                    </Flex>
                                ) : (
                                    <Flex alignItems={'center'} gap={2}>
                                        <Image src={'/icons/success.png'} />
                                        <Text> Successful </Text>
                                    </Flex>
                                )}
                            </Td>
                            <Td color={'#4d4d4d'} fontWeight={400}> {transactionId} </Td>
                            <Td> ₹{formatAmount(orderAmount)} </Td>
                            <Td> ₹{formatAmount(transactionFees)} </Td>
                            <Td> ₹{formatAmount(orderAmount + transactionFees)} </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Stack>
    )
}

export { Payouts }
