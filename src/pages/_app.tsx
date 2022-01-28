import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools} from 'react-query/devtools';

// css global da aplicação
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';

import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';

// utilizando o miragejs como api de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  makeServer();
}



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
