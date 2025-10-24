import { type Theme } from "@mui/material"
import {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider
} from "@mui/styles"
import { RouterProvider, type RouterProviderProps } from "react-router"

const generateClassName = createGenerateClassName({ productionPrefix: "m" })

interface Props {
  theme: Theme
  router: RouterProviderProps["router"]
}

export const App = ({ theme, router }: Props) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StylesProvider>
  )
}
