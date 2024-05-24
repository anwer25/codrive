import { ICarouselCardProps } from "@/types";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { Calendar, Euro, MapPin, Users } from "lucide-react";
import { FC } from "react";

export const CarouselCard: FC<ICarouselCardProps> = ({
  children,
  endDate,
  from,
  name,
  places,
  price,
  startDate,
  to,
  userId,
}): JSX.Element => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className=" h-fit bg-gradient-to-r from-blue-800 to-indigo-900"
    >
      <CardHeader className="space-x-2">
        <Link to="/dashboard/profile/$id" params={{ id: userId }}>
          <Avatar></Avatar>
        </Link>
        <div className="flex flex-col text-background">
          <span className="flex">{name}</span>
        </div>
      </CardHeader>
      <CardBody className="space-y-3 text-background">
        <div className="flex flex-col space-y-2">
          <span className="flex">
            <MapPin></MapPin>depuis: {from}
          </span>
          <span className="flex">
            <MapPin></MapPin>À: {to}
          </span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="flex">
            <Calendar />
            Date de début: {startDate}
          </span>
          <span className="flex">
            <Calendar />
            Date de fin: {endDate}
          </span>
        </div>
        <div className="flex flex-col space-y-2">
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
