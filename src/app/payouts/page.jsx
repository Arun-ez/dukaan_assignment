'use client';
import { useState } from 'react';
import { Stack, Box, Flex, Text, Select, Image } from '@chakra-ui/react';

import { Payouts } from '@/components/Payouts';
import { Refunds } from '@/components/Refunds';

const payouts = () => {

    const [selected, setSelected] = useState('This Month');
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        'Payouts(22)',
        'Refunds(2)'
    ]

    return (
        <Stack spacing={6}>
            <Flex justifyContent={'space-between'}>
                <Text color={'#1A181E'} fontWeight={500} fontSize={24} > Overview </Text>
                <Select w={180} _focusVisible={'false'} value={selected} onChange={({ target }) => setSelected(target.value)}>
                    <option value="This Month"> This Month </option>
                    <option value="This Year"> This Year </option>
                </Select>
            </Flex>

            <Flex gap={4} alignItems={'center'} flexWrap={'wrap'} py={8}>

                <Box boxShadow={'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'} w={380} borderRadius={10} bg={'#146EB4'} color={'#fff'} overflow={'hidden'} >
                    <Stack p={6}>
                        <Text display={'flex'} alignItems={'center'} gap={1} fontSize={18}> Next Payout <Image src={'/icons/help_light.png'} alt={'help'} /> </Text>

                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Text fontWeight={500} fontSize={32} mt={2} > ₹2,312.23 </Text>
                            <Text textDecoration={'underline'} display={'flex'} alignItems={'center'} gap={1}> 23 orders <Image src='/icons/right.svg' alt='right' /> </Text>
                        </Flex>
                    </Stack>

                    <Flex bg={'#0E4F82'} h={10} borderTopRadius={10} alignItems={'center'} px={4} justifyContent={'space-between'} fontWeight={300}>
                        <Text> Next payout date </Text>
                        <Text> Today, 04:00PM </Text>
                    </Flex>
                </Box>

                <Box boxShadow={'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'} p={6} w={340} borderRadius={6} >
                    <Text display={'flex'} alignItems={'center'} gap={1}> Amount Pending <Image src={'/icons/help.png'} alt={'help'} /> </Text>
                    <Text fontWeight={500} fontSize={32} mt={2} > ₹92,312.20 </Text>
                </Box>

                <Box boxShadow={'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'} p={6} w={340} borderRadius={6} >
                    <Text display={'flex'} alignItems={'center'} gap={1}> Amount Processed <Image src={'/icons/help.png'} alt={'help'} /> </Text>
                    <Text fontWeight={500} fontSize={32} mt={2} > ₹23,92,312.19</Text>
                </Box>

            </Flex>

            <Text color={'#1A181E'} fontWeight={500} fontSize={24} > Transactions | {selected} </Text>

            <Flex gap={2}>
                {tabs.map((label, index) => (
                    <Text
                        key={index}
                        fontSize={14}
                        bg={index === activeTab ? '#146EB4' : '#E6E6E6'}
                        color={index === activeTab ? '#fff' : '#808080'}
                        borderRadius={40}
                        px={4} py={2}
                        userSelect={'none'}
                        cursor={'pointer'}
                        onClick={() => setActiveTab(index)}
                    >
                        {label}
                    </Text>
                ))}
            </Flex>

            {activeTab === 0 ? (
                <Payouts />
            ) : (
                <Refunds />
            )}
        </Stack>
    )
}

export default payouts;
