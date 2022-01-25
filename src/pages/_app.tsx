import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'

// css global da aplicação
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps } : AppProps) {
  return ( 
    <ChakraProvider resetCSS theme={theme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
