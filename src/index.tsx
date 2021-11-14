import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import App from './App'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif"
  },
  config
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
