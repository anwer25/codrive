import { ProfileDeatilsCard } from "@/components/ProfileDeatilsCard";
import { queryClient } from "@/constants";
import { client } from "@/services/client";
import { profileResponse } from "@/services/types";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { queryOptions, useSuspenseQueries } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { FC } from "react";

const profileQueryOptions = queryOptions({
  queryKey: ["profile"],
  queryFn: () => client.profile.get(),
});

const Profile: FC = (): JSX.Element => {
  const result = useSuspenseQueries({ queries: [profileQueryOptions] });
  const data = result[0].data as profileResponse;
  return (
    <div className="grid grid-cols-12 mt-4 mx-2 gap-4">
      <ProfileDeatilsCard
        address={data.address}
        email={data.email}
        firstName={data.firstName}
        lastName={data.lastName}
        phoneNumber={data.phoneNumber}
        userId={data.userId}
      />
      <Card className="col-span-8">
        <CardBody className="grid grid-cols-12 mx-2 mt-2 space-y-5 gap-3 items-center">
          <div className="col-span-12 flex justify-evenly ">
            <div className="flex flex-row items-center justify-between">
              <label className="w-1/2">Prénom</label>
              <Input placeholder="John"></Input>
            </div>
            <div className="flex flex-row items-center justify-evenly">
              <label className="w-1/2">Nom de famille</label>
              <Input placeholder="Doe"></Input>
            </div>
          </div>
          <div className="col-span-12 flex justify-evenly">
            <div className="flex flex-row items-center justify-between">
              <label className="w-1/2">Email</label>
              <Input placeholder="email"></Input>
            </div>
            <div className=" flex flex-row items-center justify-between">
              <label className="w-1/2">Téléphone</label>
              <Input placeholder="123456789"></Input>
            </div>
          </div>
          <div className="col-span-12 flex justify-evenly">
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Address</label>
              <Input placeholder="123 rue de la paix"></Input>
            </div>
            <div className=" col-span-6 flex flex-row items-center justify-between">
              <label className="w-1/2">Mot de passe</label>
              <Input placeholder="password"></Input>
            </div>
          </div>

          <div className="col-span-12 flex justify-end items-center">
            <Button className="bg-orange-600 text-background">
              Sauvegarder
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export const Route = createFileRoute("/dashboard/_layout/profile/")({
  component: Profile,
  loader: () => queryClient.ensureQueryData(profileQueryOptions),
});
