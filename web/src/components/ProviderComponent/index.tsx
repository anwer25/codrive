import { FC, PropsWithChildren } from "react";

export const ProviderComponent: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
