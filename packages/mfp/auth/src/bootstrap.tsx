import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { createTheme } from "@mui/material"
import { createRoot } from "react-dom/client"

import { App } from "./App"
import { createRouter, type CreateRouterConfig } from "./router"

interface Config {
  container: HTMLElement
  routerConfig?: CreateRouterConfig
  port?: MessagePort
}

export const bootstrap = ({
  container,
  routerConfig = { type: "memory" },
  port
}: Config) => {
  const router = createRouter(routerConfig)
  router.subscribe(({ historyAction, location, errors }) => {
    if (!errors) {
      port?.postMessage(JSON.stringify({ historyAction, location }))
    }
  })

  port?.addEventListener("message", (event) => {
    const { historyAction, location } = JSON.parse(event.data)
    const currentLocation = router.state.location
    if (
      location.pathname === currentLocation.pathname &&
      location.hash === currentLocation.hash &&
      location.search === currentLocation.search &&
      location.state === currentLocation.state
    ) {
      return
    }
    if (historyAction === "POP") {
      return router.navigate(-1)
    }
    return router.navigate(
      {
        pathname: location.pathname,
        hash: location.hash,
        search: location.search
      },
      {
        replace: historyAction === "REPLACE",
        state: location.state
      }
    )
  })

  const root = createRoot(container)
  root.render(<App theme={createTheme()} router={router} />)
  return root
}
