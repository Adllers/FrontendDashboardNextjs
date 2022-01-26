import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools} from 'react-query/devtools';

// css global da aplicação
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';

import { QueryClient, QueryClientProvider } from 'react-query';

// utilizando o miragejs como api de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps } : AppProps) {
  return ( 

    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}> 
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp
