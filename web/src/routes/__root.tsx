import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { FC } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/constants";
import { NextUIProvider } from "@nextui-org/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@/components";
import { IRouterContext } from "@/types";

const RouteComponent: FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <Outlet />
        </NextUIProvider>
        <ReactQueryDevtools initialIsOpen={false} position="right" />
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: RouteComponent,
});
