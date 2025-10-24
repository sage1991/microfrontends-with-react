import { createBrowserRouter } from "react-router"

import { Header } from "../components/Header"
import { MarketingApp } from "../components/MarketingApp"

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <>
        <Header />
        <MarketingApp />
      </>
    )
  }
])
