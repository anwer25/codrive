import { IProfileDetailsCardProps } from "@/types";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC } from "react";

export const ProfileDeatilsCard: FC<IProfileDetailsCardProps> = ({
  address,
  email,
  firstName,
  lastName,
  phoneNumber,
}): JSX.Element => {
  return (
    <Card className="col-span-4 h-fit">
      <CardHeader>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Avatar size="lg"></Avatar>
          <h1 className="text-2xl">
            {firstName} {lastName}
          </h1>
          <p className="text-sm"></p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <span>Prénom</span>
            <span>{firstName}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Nom de famille</span>
            <span>{lastName}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Email</span>
            <span>{email}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Téléphone</span>
            <span>{phoneNumber}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Adresse</span>
            <span>{address}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
