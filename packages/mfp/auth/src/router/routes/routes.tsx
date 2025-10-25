import { Navigate, type RouteObject } from "react-router"

import { SignIn } from "../../components/Signin"
import { SignUp } from "../../components/Signup"

export const routes = [
  {
    path: "/auth",
    children: [
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate replace to="/auth/signin" />
  }
] satisfies RouteObject[]
