import { createBrowserRouter, Outlet } from "react-router"

import { Header } from "../components/Header"

export const router = createBrowserRouter([
  {
    Component: () => (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/auth/*",
        lazy: async () => {
          const { AuthApp } = await import("../components/AuthApp")
          return { Component: AuthApp }
        }
      },
      {
        path: "/*",
        lazy: async () => {
          const { MarketingApp } = await import("../components/MarketingApp")
          return { Component: MarketingApp }
        }
      }
    ]
  }
])
