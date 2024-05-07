import { HomeHeaderSection } from "@/components/HomeHeaderSection";
import { NavBarComponent } from "@/components/NavBarComponent";
import { SectionWithTitle } from "@/components/SectionsWithTitle";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
} from "@nextui-org/react";
import { FC } from "react";

export const DashBoard: FC = (): JSX.Element => {
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  return (
    <>
      <NavBarComponent />
      <HomeHeaderSection>
        <h1 className="text-4xl font-bold text-center text-white">
          Ajouter un trajet
        </h1>
        <p className="text-lg text-center text-white">
          Quel est votre trajet ?
        </p>
      </HomeHeaderSection>
      <SectionWithTitle
        title="Quel est votre trajet ?"
        textPosition="left"
        titleSize="small"
      >
        <Card className="p-5 mt-10">
          <CardBody className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="depart">Donner un nom à votre trajet *</label>
                <Input type="text" id="depart" />
              </div>
              <div className="space-y-3">
                <label htmlFor="arrivée">Arrivée *</label>
                <Input type="text" id="arrivée" />
              </div>
              <div className="space-y-3">
                <label htmlFor="disponible">Nombre de place disponible</label>
                <Input type="number" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="disponible">Nombre de place disponible</label>
                <Input type="number" />
              </div>
              <div className="space-y-3">
                <label htmlFor="disponible">
                  Frais de participation demandé
                </label>
                <Input type="number" />
              </div>
              <div className="space-y-3">
                <Checkbox>Faîtes-vous ce trajet avec un véhicule ?</Checkbox>
              </div>
            </div>
          </CardBody>
        </Card>
      </SectionWithTitle>
      <SectionWithTitle
        title="Quand effectuez-vous ce trajet ?"
        textPosition="left"
        titleSize="small"
        className="my-10"
      >
        <Card className="p-5 mt-10">
          <CardBody className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="début">Date de début</label>
                <Input type="date" id="début" />
              </div>
              <div className="space-y-3">
                {days.map((day) => (
                  <div key={day} className="flex items-center space-x-12">
                    <Checkbox className="pr-4">{day}</Checkbox>
                    <Input type="time" />
                    <Input type="time" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="fin">Date de fin</label>
                <Input type="date" id="fin" />
              </div>
            </div>
          </CardBody>
          <CardFooter className="space-x-4">
            <Button variant="flat" color="success">
              Ajouter un trajet
            </Button>
            <Button variant="flat" color="danger">
              Annuler
            </Button>
          </CardFooter>
        </Card>
      </SectionWithTitle>
    </>
  );
};
