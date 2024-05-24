import { IRideItemCardProps } from "@/types";
import { Card, CardBody, Avatar } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { MapPin, Calendar, Users, Euro } from "lucide-react";
import { FC } from "react";

export const RideItemCard: FC<IRideItemCardProps> = ({
  endDate,
  from,
  places,
  price,
  startDate,
  to,
  userId,
  name,
  children,
}) => {
  return (
    <Card className="col-span-12">
      <CardBody className="flex justify-around items-center flex-row">
        <Link to="/dashboard/profile/$id" params={{ id: userId }}>
          <Avatar></Avatar>
        </Link>
        <div className="flex flex-col">
          <span className="flex">{name}</span>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="flex">
            <MapPin></MapPin>Depuis: {from}
          </span>
          <span className="flex">
            <MapPin></MapPin>À:{to}
          </span>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="flex">
            <Calendar />
            Date de début: {startDate}
          </span>
          <span className="flex">
            <Calendar />
            Date de fin: {endDate}
          </span>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="flex">
            <Euro></Euro>Prix: {price}
          </span>
          <span className="flex">
            <Users></Users>lieux : {places}
          </span>
        </div>
        <div className="flex flex-row space-x-4">{children}</div>
      </CardBody>
    </Card>
  );
};
