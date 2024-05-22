import { ProfileDeatilsCard } from "@/components/ProfileDeatilsCard";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { createFileRoute } from "@tanstack/react-router";
import { FC } from "react";

const Profile: FC = (): JSX.Element => {
  return (
    <div className="grid grid-cols-12 mt-4 mx-2 gap-4">
      <ProfileDeatilsCard />
      <Card className="col-span-8">
        <CardBody className="grid grid-cols-12 mx-2 mt-2 space-y-5 gap-3 items-center">
          <div className="col-span-12 flex ">
            <div className="flex flex-row items-center justify-between">
              <label className="w-1/2">First Name</label>
              <Input placeholder="John"></Input>
            </div>
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Last Name</label>
              <Input placeholder="Doe"></Input>
            </div>
          </div>
          <div className="col-span-12 flex ">
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Email</label>
              <Input placeholder="email"></Input>
            </div>
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Phone</label>
              <Input placeholder="123456789"></Input>
            </div>
          </div>
          <div className="col-span-12 flex ">
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Address</label>
              <Input placeholder="123 rue de la paix"></Input>
            </div>
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Password</label>
              <Input placeholder="password"></Input>
            </div>
          </div>
          <div className=" col-span-6 flex flex-row items-center justify-between">
            <label className="w-1/2">Confirm Password</label>
            <Input placeholder="password"></Input>
          </div>
          <div className="col-span-12 flex justify-end items-center">
            <Button>Save</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export const Route = createFileRoute("/_layout/dashboard/_layout/profile/")({
  component: Profile,
});
