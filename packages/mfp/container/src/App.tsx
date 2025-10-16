import { createTheme } from "@mui/material"
import { ThemeProvider } from "@mui/styles"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

import { Header } from "./components/Header"
import { MarketingApp } from "./components/MarketingApp"

const theme = createTheme()

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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
