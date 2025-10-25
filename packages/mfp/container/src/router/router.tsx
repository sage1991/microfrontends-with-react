import { createBrowserRouter, Outlet } from "react-router"

import { AuthApp } from "../components/AuthApp"
import { Header } from "../components/Header"
import { MarketingApp } from "../components/MarketingApp"

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/auth/*",
        element: <AuthApp />
      },
      {
        path: "*",
        element: <MarketingApp />
      }
    ]
  }
])
