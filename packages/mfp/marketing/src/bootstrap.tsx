import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { createRoot } from "react-dom/client"

import { App } from "./App"

export const bootstrap = (container?: HTMLElement | null) => {
  if (!container) {
    return
  }

  const root = createRoot(container)
  root.render(<App />)
}
