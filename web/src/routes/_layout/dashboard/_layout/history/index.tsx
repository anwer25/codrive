import { RideItemCard } from "@/components/RideItemCard";
import { client } from "@/services/client";
import { rideItemResponse } from "@/services/types";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { queryOptions, useSuspenseQueries } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { FC } from "react";

const ridesQueryOptions = queryOptions({
  queryKey: ["rides"],
  queryFn: () => client.ride.get(),
});

const History: FC = (): JSX.Element => {
  const result = useSuspenseQueries({ queries: [ridesQueryOptions] });
  const data = result[0].data as rideItemResponse;

  return (
    <>
      <Card className="mt-4 mx-2">
        <CardBody className="flex justify-between flex-row items-center">
          <Input
            placeholder="from"
            labelPlacement="outside"
            startContent={
              <span className="  flex flex-col items-center justify-between">
                from
              </span>
            }
            className="basis-56"
          ></Input>
          <Input
            placeholder="to"
            labelPlacement="outside"
            startContent={
              <span className="  flex flex-col items-center justify-between">
                to
              </span>
            }
            className="basis-56"
          ></Input>
          <Input
            placeholder="to"
            labelPlacement="outside"
            type="date"
            className="basis-56"
          ></Input>
          <Button className="flex justify-center items-center bg-orange-600 text-background">
            <Search></Search>
            <span>Rechercher</span>
          </Button>
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
          ></RideItemCard>
        ))}
      </div>
    </>
  );
};

export const Route = createFileRoute("/_layout/dashboard/_layout/history/")({
  component: History,
});
