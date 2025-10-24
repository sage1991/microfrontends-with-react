import { createTheme } from "@mui/material"
import {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider
} from "@mui/styles"
import { RouterProvider } from "react-router"

import { router } from "./router"

const theme = createTheme()

const generateClassName = createGenerateClassName({ productionPrefix: "c" })

export const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StylesProvider>
  )
}
