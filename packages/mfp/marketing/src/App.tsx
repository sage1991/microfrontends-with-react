import { createTheme } from "@mui/material"
import {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider
} from "@mui/styles"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

import { Landing } from "./components/Landing"
import { Pricing } from "./components/Pricing"

const theme = createTheme()
const generateClassName = createGenerateClassName({ productionPrefix: "m" })

const router = createBrowserRouter([
  {
    index: true,
    element: <Landing />
  },
  {
    path: "/pricing",
    element: <Pricing />
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
