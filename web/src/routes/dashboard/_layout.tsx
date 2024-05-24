// import { HomeHeaderSection } from "@/components/HomeHeaderSection";
import { AsideComponent } from "@/components/aside";
import { ScrollShadow } from "@nextui-org/react";
import { Outlet, createFileRoute } from "@tanstack/react-router";

const DashBoardLayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen gap-2">
      <AsideComponent></AsideComponent>
      <ScrollShadow className="col-span-10 scrollbar-hide">
        <Outlet />
      </ScrollShadow>
    </div>
  );
};

export const Route = createFileRoute("/dashboard/_layout")({
  component: DashBoardLayout,
});
