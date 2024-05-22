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
        <div className="flex flex-col">
          <span className="flex">
            <MapPin></MapPin>from: {from}
          </span>
          <span className="flex">
            <MapPin></MapPin>to: {to}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="flex">
            <Calendar />
            start date: {startDate}
          </span>
          <span className="flex">
            <Calendar />
            end date: {endDate}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="flex">
            <Euro></Euro>price: {price}
          </span>
          <span className="flex">
            <Users></Users>places : {places}
          </span>
        </div>
        <div className="flex flex-row space-x-4">{children}</div>
      </CardBody>
    </Card>
  );
};
