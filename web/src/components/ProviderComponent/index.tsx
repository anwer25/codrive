import { FC, PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";

export const ProviderComponent: FC<PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
