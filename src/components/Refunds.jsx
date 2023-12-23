import { Stack, Flex, Text, Image, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Controller } from "./Controller";

const formatAmount = (number) => {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);

    return `${formattedAmount}`;
}

const formatDate = (dateString) => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    };

    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
}

const Refunds = () => {

    const data = [
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: false, date: new Date() },
        { orderId: '76489', transactionId: '59999594545595', orderAmount: 1456, isProcessing: true, date: new Date() }
    ]

    return (
        <Stack>
            <Controller />
            <Table>
                <Thead bg={'#f2f2f2'}>
                    <Tr >
                        <Th w={200}> Order ID </Th>
                        <Th textTransform={'none'}> Status </Th>
                        <Th textTransform={'none'} > Transaction ID </Th>
                        <Th textTransform={'none'}> Refund Date </Th>
                        <Th textTransform={'none'}> Order amount </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {data.map(({ orderId, transactionId, orderAmount, isProcessing, date }, index) => (
                        <Tr key={index}>
                            <Td color={'#146EB4'}> #{orderId} </Td>
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
                            <Td> {formatDate(date)} </Td>
                            <Td> ₹{formatAmount(orderAmount)} </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Stack>
    )
}

export { Refunds }