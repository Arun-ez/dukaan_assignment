'use client';
import { usePathname } from "next/navigation";
import { Stack, Flex, Box, Image, Text, Link } from "@chakra-ui/react"

const Sidebar = ({ user }) => {

    const pathname = usePathname();

    const pages = [
        { label: 'Home', path: '/', icon: '/icons/home.png' },
        { label: 'Orders', path: '/orders', icon: '/icons/orders.png' },
        { label: 'Products', path: '/products', icon: '/icons/products.png' },
        { label: 'Delivery', path: '/delivery', icon: '/icons/delivery.png' },
        { label: 'Marketing', path: '/marketing', icon: '/icons/marketing.png' },
        { label: 'Analytics', path: '/analytics', icon: '/icons/analytics.png' },
        { label: 'Payouts', path: '/payouts', icon: '/icons/payouts.png' },
        { label: 'Discounts', path: '/discounts', icon: '/icons/discounts.png' },
        { label: 'Audience', path: '/discounts', icon: '/icons/audience.png' },
        { label: 'Apperance', path: '/audience', icon: '/icons/apperence.png' },
        { label: 'Plugins', path: '/plugins', icon: '/icons/plugins.png' }
    ]

    return (
        <Stack w={240} minW={240} bg={'#1E2640'} p={4} color={'#fff'} >
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Flex gap={3}>
                    <Image src={'/assets/logo.png'} />
                    <Box>
                        <Text fontWeight={500} > {user.name} </Text>
                        <Text fontWeight={300} textDecoration={'underline'} > Visit Store </Text>
                    </Box>
                </Flex>

                <Image src={'/icons/down.png'} />
            </Flex>

            <Stack mt={12} spacing={0} h={'100%'}>
                {pages.map(({ label, path, icon }, index) => (
                    <Link
                        background={path === pathname ? 'rgba(255, 255, 255, 0.10)' : ''}
                        _hover={{ textDecoration: 'none', background: 'rgba(255, 255, 255, 0.10)' }}
                        borderRadius={8}
                        padding={2}
                        fontSize={18}
                        href={path}
                        key={index}
                        display={'flex'}
                        alignItems={'center'}
                        gap={4}
                    >
                        <Image src={icon} alt={label} />
                        <Text> {label} </Text>
                    </Link>
                ))}
            </Stack>

            <Flex
                background={'rgba(255, 255, 255, 0.10)'}
                alignItems={'center'}
                gap={4} p={2} borderRadius={8}
            >
                <Box p={2} bg={'rgba(255, 255, 255, 0.10)'} borderRadius={4}>
                    <Image src="/icons/wallet.png" h={8} w={8} />
                </Box>

                <Box>
                    <Text fontSize={14}> Available Credit </Text>
                    <Text fontWeight={500} fontSize={20}> 222.10 </Text>
                </Box>
            </Flex>
        </Stack>
    )
}

export { Sidebar }
