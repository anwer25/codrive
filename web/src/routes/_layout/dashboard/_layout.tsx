// import { HomeHeaderSection } from "@/components/HomeHeaderSection";
import { ScrollShadow } from "@nextui-org/react";
import { Outlet, createFileRoute } from "@tanstack/react-router";

const DashBoardLayout = () => {
  return (
    <ScrollShadow className="col-span-10 scrollbar-hide">
      {/* <HomeHeaderSection>
        <h1 className="text-4xl font-bold text-center text-white">
          Ajouter un trajet
        </h1>
        <p className="text-lg text-center text-white">
          Quel est votre trajet ?
        </p>
      </HomeHeaderSection> */}
      <Outlet />
    </ScrollShadow>
  );
};

export const Route = createFileRoute("/_layout/dashboard/_layout")({
  component: DashBoardLayout,
});
