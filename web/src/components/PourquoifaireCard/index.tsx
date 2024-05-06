import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

interface PourquoifaireCardProps extends PropsWithChildren {
  icon: JSX.Element;
  text: string;
}

export const PourquoifaireCard: FC<PourquoifaireCardProps> = ({
  icon,
  text,
}): JSX.Element => {
  return (
    <Card className="p-10">
      <CardHeader className="flex flex-col items-center justify-center">
        {icon}
      </CardHeader>
      <CardBody className="text-center">{text}</CardBody>
    </Card>
  );
};
