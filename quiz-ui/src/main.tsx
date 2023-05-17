import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import {Box, ChakraProvider,extendTheme } from '@chakra-ui/react'
import AllRoutes from './Routes/AllRoutes.tsx';
import NavBar from './components/NavBar.tsx';

const theme = extendTheme({
  colors: {
    primary: 'var(--primary-color)',
    whitecolor : 'var(--white-color)',
    greycolor: 'var(--grey--color)',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme} >
    <BrowserRouter>
      <NavBar />
      <Box p={2} >
       <AllRoutes />
      </Box>
    </BrowserRouter>
  </ChakraProvider>
)
