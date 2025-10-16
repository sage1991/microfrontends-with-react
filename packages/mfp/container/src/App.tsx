import { createTheme } from "@mui/material"
import {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider
} from "@mui/styles"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

import { Header } from "./components/Header"
import { MarketingApp } from "./components/MarketingApp"

const theme = createTheme()
const generateClassName = createGenerateClassName({ productionPrefix: "c" })

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <>
        <Header />
        <MarketingApp />
      </>
    )
  },
  {
    path: "*",
    element: <Navigate replace to="/" />
  }
])

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StylesProvider>
  )
}
