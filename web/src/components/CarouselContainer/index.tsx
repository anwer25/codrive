import { FC, Children, PropsWithChildren } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export const CarouselContainer: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <Carousel className="w-full mt-10">
      <CarouselContent>
        {Children.map(children, (child) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
