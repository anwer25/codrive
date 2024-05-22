import { ProfileDeatilsCard } from "@/components/ProfileDeatilsCard";
import { RideItemCard } from "@/components/RideItemCard";
import { getAllRidesResponse } from "@/services/instance";
import { Card, CardBody } from "@nextui-org/react";
import { createFileRoute } from "@tanstack/react-router";
import { FC } from "react";

const Profile: FC = (): JSX.Element => {
  return (
    <div className="grid grid-cols-12 mt-4 mx-2 gap-4">
      <ProfileDeatilsCard />
      <Card className="col-span-8">
        <CardBody className="grid grid-cols-12 mx-2 mt-2 space-y-5">
          {getAllRidesResponse.map((ride, index) => (
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
        </CardBody>
      </Card>
    </div>
  );
};

export const Route = createFileRoute("/_layout/dashboard/_layout/profile/$id/")(
  {
    component: Profile,
  },
);
