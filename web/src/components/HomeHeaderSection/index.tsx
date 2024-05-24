import { FC, PropsWithChildren } from "react";
import { HeaderSection } from "../HeaderSection";

export const HomeHeaderSection: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <HeaderSection className="h-96 bg-cover">
      <div className="flex flex-col items-center justify-center h-full">
        {!children ? (
          <>
            <h1 className="text-4xl font-bold text-center text-white">
              Bienvenue chez Co-drive
            </h1>
          </>
        ) : (
          children
        )}
      </div>
    </HeaderSection>
  );
};
