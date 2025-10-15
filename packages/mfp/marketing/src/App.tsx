import { createTheme } from "@mui/material"
import { ThemeProvider } from "@mui/styles"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router"

import { Landing } from "./components/Landing"
import { Pricing } from "./components/Pricing"

const theme = createTheme()

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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
