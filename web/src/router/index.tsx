import { Home, Login } from "@/pages";
import { DashBoard } from "@/pages/dashboard";
import { SignUp } from "@/pages/signup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: SignUp,
  },
  {
    path: "/dashboard",
    Component: DashBoard,
  },
]);
