import {
  createBrowserRouter,
  createMemoryRouter,
  type DOMRouterOpts,
  type MemoryRouterOpts
} from "react-router"

import { routes } from "./routes"

interface CreateMemoryRouterConfig {
  type: "memory"
  opts?: MemoryRouterOpts
}

interface CreateBrowserRouterConfig {
  type: "browser"
  opts?: DOMRouterOpts
}

export type CreateRouterConfig =
  | CreateMemoryRouterConfig
  | CreateBrowserRouterConfig

export const createRouter = (config: CreateRouterConfig) => {
  switch (config.type) {
    case "memory":
      return createMemoryRouter(routes, config.opts)
    case "browser":
    default:
      return createBrowserRouter(routes, config.opts)
  }
}
