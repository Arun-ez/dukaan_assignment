// app/layout.tsx
import { Sidebar } from '@/components/Sidebar'
import { Provider } from './provider'

import { Box, Flex } from '@chakra-ui/react'
import { Navbar } from '@/components/Navbar'

import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dukaan Assignment'
}

export default function RootLayout({ children }) {

  const user = {
    name: 'Nishyan',
    email: 'nishyan@gmail.com'
  }

  return (
    <html lang='en'>
      <body className={font.className}>
        <Provider>
          <Flex h={'100vh'}>
            <Sidebar user={user} />
            <Box w={'full'} overflowX={'auto'}>
              <Navbar />
              <Box p={10} maxH={'calc(100vh - 70px)'} overflowY={'auto'}>
                {children}
              </Box>
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  )
}