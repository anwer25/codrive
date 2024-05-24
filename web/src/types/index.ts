import { IRideItem, profileResponse } from "@/services/types";
import { QueryClient } from "@tanstack/react-query";
import { FileRoutesByPath } from "@tanstack/react-router";
import { LucideProps } from "lucide-react";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  PropsWithChildren,
} from "react";

export interface IRouterContext {
  queryClient: QueryClient;
  isLogged: boolean;
}

type extractPathValue<T> = T extends { path: infer P } ? P : never;
type fileRoutePaths = extractPathValue<
  FileRoutesByPath[keyof FileRoutesByPath]
>;

export interface ISideBarLink {
  name: string;
  path: fileRoutePaths;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export interface IRideItemCardProps extends PropsWithChildren, IRideItem {}
export interface ICarouselCardProps extends IRideItemCardProps {}
export interface IProfileDetailsCardProps
  extends PropsWithChildren,
    profileResponse {}
