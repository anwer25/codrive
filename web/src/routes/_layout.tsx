import { Footer } from "@/components/Footer";
import { NavBarComponent } from "@/components/NavBarComponent";
import {
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import { FC } from "react";

const GlobalLayout: FC = () => {
  const router = useRouterState();
  const isAuthPage = ["/login", "/signup"].includes(router.location.pathname);
  return (
    <div className="grid grid-cols-12 h-screen gap-2">
      <NavBarComponent />

      <Outlet />
      {!isAuthPage && <Footer />}
    </div>
  );
};

export const Route = createFileRoute("/_layout")({
  component: GlobalLayout,
});
