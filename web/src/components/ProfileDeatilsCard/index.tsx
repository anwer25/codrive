import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC } from "react";

export const ProfileDeatilsCard: FC = (): JSX.Element => {
  return (
    <Card className="col-span-4 h-fit">
      <CardHeader>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Avatar size="lg"></Avatar>
          <h1 className="text-2xl">John Doe</h1>
          <p className="text-sm"></p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <span>First Name</span>
            <span>John</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Last Name</span>
            <span>Doe</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Email</span>
            <span>ad@hh.com</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Phone</span>
            <span>123456789</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>Address</span>
            <span>123 rue de la paix</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
