import { CarouselCard } from "@/components/CarouselCard";
import { CarouselContainer } from "@/components/CarouselContainer";
import { Footer } from "@/components/Footer";
import { HomeHeaderSection } from "@/components/HomeHeaderSection";
import { ModalComponent } from "@/components/ModalComponent";

import { NavBarComponent } from "@/components/NavBarComponent";
import { PourquoifaireCardContainer } from "@/components/PourquoifaireCardContainer";
import { SectionWithTitle } from "@/components/SectionsWithTitle";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";

import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = (): JSX.Element => {
  return (
    <>
      <NavBarComponent />
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
            to={"/register"}
          >
            Inscrivez-vous, c'est gratuit !
          </Button>
        </div>
      </SectionWithTitle>
      <SectionWithTitle title="Les derniers inscrits" className="w-full">
        <CarouselContainer>
          <CarouselCard>
            <CardHeader className="flex gap-3">
              <Card className="bg-black bg-opacity-25  px-10">
                <CardHeader>
                  <Link className="text-background" to={""}>
                    User1
                  </Link>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-background">Recherche un trajet </p>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </CardHeader>
          </CarouselCard>
          <CarouselCard>
            <CardHeader className="flex gap-3">
              <Card className="bg-black bg-opacity-25  px-10">
                <CardHeader>
                  <Link className="text-background" to={""}>
                    User1
                  </Link>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-background">Recherche un trajet </p>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </CardHeader>
          </CarouselCard>
          <CarouselCard>
            <CardHeader className="flex gap-3">
              <Card className="bg-black bg-opacity-25  px-10">
                <CardHeader>
                  <Link className="text-background" to={""}>
                    User1
                  </Link>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-background">Recherche un trajet </p>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </CardHeader>
          </CarouselCard>
        </CarouselContainer>
        <div className="flex flex-col items-center justify-center mt-11">
          <Button
            color="default"
            variant="bordered"
            className="bg-blue-600 text-background"
            as={Link}
            to={"/users"}
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
      <Footer></Footer>
      <ModalComponent
        onPrimaryButtonPress={() => console.log("hello")}
        onSecondaryButtonPress={() => console.log("hello")}
        primaryButtonLabel="Submit"
        secondaryButtonLabel="Cancel"
      ></ModalComponent>
    </>
  );
};
