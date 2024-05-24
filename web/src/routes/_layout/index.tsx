import { createFileRoute } from "@tanstack/react-router";

import { CarouselCard } from "@/components/CarouselCard";
import { CarouselContainer } from "@/components/CarouselContainer";
import { HomeHeaderSection } from "@/components/HomeHeaderSection";
import { PourquoifaireCardContainer } from "@/components/PourquoifaireCardContainer";
import { SectionWithTitle } from "@/components/SectionsWithTitle";
import { Button, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";

import { FC } from "react";
import { queryOptions, useSuspenseQueries } from "@tanstack/react-query";
import { client } from "@/services/client";
import { rideItemResponse } from "@/services/types";
import { queryClient } from "@/constants";

const ridesQueryOptions = queryOptions({
  queryKey: ["rides"],
  queryFn: () => client.ride.get(),
});

const Home: FC = (): JSX.Element => {
  const result = useSuspenseQueries({ queries: [ridesQueryOptions] });
  const data = result[0].data as rideItemResponse;
  const isLogIn = false;
  return (
    <main className="col-span-12">
      <HomeHeaderSection />
      <SectionWithTitle
        title="Pourquoi faire du covoiturage ?"
        titleSize="large"
      >
        <PourquoifaireCardContainer />
        <div className="flex flex-col items-center justify-center mt-11">
          <Button
            color="default"
            variant="bordered"
            className="bg-blue-600 text-background"
            as={Link}
            to={"/signup"}
          >
            Inscrivez-vous, c'est gratuit !
          </Button>
        </div>
      </SectionWithTitle>
      <SectionWithTitle title="Les derniers inscrits" className="w-full">
        <CarouselContainer>
          {data
            .slice(0, 4)
            .map(
              (
                {
                  endDate,
                  from,
                  name,
                  places,
                  price,
                  rideId,
                  startDate,
                  to,
                  userId,
                },
                index,
              ) => (
                <CarouselCard
                  endDate={endDate}
                  from={from}
                  name={name}
                  places={places}
                  price={price}
                  rideId={rideId}
                  startDate={startDate}
                  to={to}
                  userId={userId}
                  key={`carousel-item-${index}`}
                ></CarouselCard>
              ),
            )}
        </CarouselContainer>
        <div className="flex flex-col items-center justify-center mt-11">
          <Button
            color="default"
            variant="bordered"
            className="bg-blue-600 text-background"
            as={Link}
            to={`${isLogIn ? "" : "/login"}`}
          >
            Voir plus d'inscrits
          </Button>
        </div>
      </SectionWithTitle>
      <SectionWithTitle
        title="Pourquoi faire du covoiturage ?"
        className="w-full"
      >
        <div className="mt-10 space-y-6 font-semibold text-medium">
          <p>
            Le covoiturage apporte une solution très efficace aux problèmes de
            parking.
          </p>
          <p>
            En partageant les frais avec le conducteur, vous allez faire des
            économies sur les frais de carburant. De plus, vous contribuez au
            développement durable en réduisant les émissions de CO2.
          </p>
          <p>Le covoiturage permet aussi d’éviter les embouteillages.</p>
          <p>
            Enfin, vous pourrez faire de nouvelles connaissances et partager sur
            des sujets intéressants tout au long de votre trajet.
          </p>
        </div>
      </SectionWithTitle>
    </main>
  );
};

export const Route = createFileRoute("/_layout/")({
  component: Home,
  loader: () => queryClient.ensureQueryData(ridesQueryOptions),
});
