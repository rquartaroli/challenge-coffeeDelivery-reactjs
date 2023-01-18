import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { ShoppingCartProvider } from "./hooks/shoppingCartContext"
import { Router } from "./Router"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
        </ShoppingCartProvider>
      </BrowserRouter>
      
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
