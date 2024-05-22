import { Card, Image } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

export const CarouselCard: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none bg-[url('https://www.trajetalacarte.com/img/background.jpg')] bg-center bg-cover h-60"
    >
      {children}
    </Card>
  );
};
