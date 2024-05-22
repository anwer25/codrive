import { Footer } from "@/components/Footer";
import { NavBarComponent } from "@/components/NavBarComponent";
import { AsideComponent } from "@/components/aside";
import {
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import { FC } from "react";

const GlobalLayout: FC = () => {
  const router = useRouterState();
  const isAuthPage =
    router.location.pathname.includes("/login") ||
    router.location.pathname.includes("/signup");
  const isDashboardPage = router.location.pathname.includes("/dashboard");
  return (
    <div className="grid grid-cols-12 h-screen gap-2">
      {isAuthPage || !isDashboardPage ? <NavBarComponent /> : null}
      {isDashboardPage && <AsideComponent />}

      <Outlet />
      {isAuthPage || !isDashboardPage ? <Footer /> : null}
    </div>
  );
};

export const Route = createFileRoute("/_layout")({
  component: GlobalLayout,
});
