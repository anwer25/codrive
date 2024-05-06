import { Home, Login } from "@/pages";
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
]);
