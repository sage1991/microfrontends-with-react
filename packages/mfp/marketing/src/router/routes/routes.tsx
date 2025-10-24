import { Navigate, type RouteObject } from "react-router"

import { Landing } from "../../components/Landing"
import { Pricing } from "../../components/Pricing"

export const routes = [
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
] satisfies RouteObject[]
