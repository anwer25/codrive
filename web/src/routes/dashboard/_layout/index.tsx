import { RideItemCard } from "@/components/RideItemCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { queryClient } from "@/constants";
import { client } from "@/services/client";
import { rideItemResponse } from "@/services/types";
import { Button, Card, CardBody, Input, ScrollShadow } from "@nextui-org/react";
import { queryOptions, useSuspenseQueries } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { BadgeEuro, Euro, Plus, Search, Users } from "lucide-react";
import { FC } from "react";

const ridesQueryOptions = queryOptions({
  queryKey: ["rides"],
  queryFn: () => client.ride.get(),
});

const DashBoard: FC = (): JSX.Element => {
  const result = useSuspenseQueries({ queries: [ridesQueryOptions] });
  const data = result[0].data as rideItemResponse;

  return (
    <>
      <Card className="mt-4 mx-2">
        <CardBody className="flex justify-between flex-row items-center">
          <Input
            placeholder="depuis"
            labelPlacement="outside"
            startContent={
              <span className="  flex flex-col items-center justify-between">
                depuis:
              </span>
            }
            className="basis-56"
          ></Input>
          <Input
            placeholder="À"
            labelPlacement="outside"
            startContent={
              <span className="  flex flex-col items-center justify-between">
                À:
              </span>
            }
            className="basis-56"
          ></Input>
          <Input
            placeholder="À"
            labelPlacement="outside"
            type="date"
            className="basis-56"
          ></Input>
          <Button className="flex justify-center items-center bg-orange-600 text-background">
            <Search></Search>
            <span>Rechercher</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-orange-600 text-background">
                <Plus></Plus>
                <span>Ajouter</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="space-y-4 flex flex-col ">
              <SheetHeader>
                <span className="text-2xl">Ajouter un trajet</span>
              </SheetHeader>
              <ScrollShadow className="flex flex-col  space-y-4 basis-4/5">
                <Input
                  placeholder="depuis"
                  labelPlacement="outside"
                  startContent={
                    <span className="  flex flex-col items-center justify-between">
                      depuis
                    </span>
                  }
                ></Input>
                <Input
                  placeholder="à"
                  labelPlacement="outside"
                  startContent={
                    <span className="  flex flex-col items-center justify-between">
                      à
                    </span>
                  }
                ></Input>
                <Input labelPlacement="outside" type="date"></Input>
                <Input
                  placeholder="prix"
                  labelPlacement="outside"
                  type="number"
                  startContent={<Euro></Euro>}
                ></Input>
                <Input
                  placeholder="lieux"
                  labelPlacement="outside"
                  type="number"
                  startContent={<Users></Users>}
                ></Input>
              </ScrollShadow>
              <Button className="flex justify-center items-center bg-orange-600 text-background">
                <Plus></Plus>
                <span>Ajouter</span>
              </Button>
            </SheetContent>
          </Sheet>
        </CardBody>
      </Card>
      <div className="grid grid-cols-12 mx-2 mt-2 space-y-5">
        {data.map((ride, index) => (
          <RideItemCard
            endDate={ride.endDate}
            from={ride.from}
            places={ride.places}
            price={ride.price}
            startDate={ride.startDate}
            to={ride.to}
            userId={ride.userId}
            rideId={ride.rideId}
            name={ride.name}
            key={index}
          >
            <Button className="bg-orange-600 text-background">
              <BadgeEuro></BadgeEuro>
              <span>Reserve</span>
            </Button>
          </RideItemCard>
        ))}
      </div>
    </>
  );
};
export const Route = createFileRoute("/dashboard/_layout/")({
  component: DashBoard,
  loader: () => queryClient.ensureQueryData(ridesQueryOptions),
});
