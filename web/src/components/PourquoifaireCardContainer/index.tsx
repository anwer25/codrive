import { FC, PropsWithChildren } from "react";
import { PourquoifaireCard } from "../PourquoifaireCard";
import { DollarSign, Users, LeafyGreen } from "lucide-react";

export const PourquoifaireCardContainer: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <div className="flex  gap-6 mt-10">
      <PourquoifaireCard
        icon={
          <DollarSign className="h-16 w-16  rounded-xl text-background bg-blue-600" />
        }
        text="Le covoiturage quotidien permet de réduire les frais et d'économiser 2200€/an. 93 % des conducteurs effectuent leurs déplacements domicile-travail seuls."
      />
      <PourquoifaireCard
        icon={
          <Users className="h-16 w-16  rounded-xl text-background bg-blue-600" />
        }
        text="Ne plus être seul ! tous les matins, pour aller au travail ? Pas de souci le covoiturage permet de développer l'entraide et les contacts !"
      />
      <PourquoifaireCard
        icon={
          <LeafyGreen className="h-16 w-16  rounded-xl text-background bg-blue-600" />
        }
        text="Sauver la planete ! : Faire covoiturage journalier régulier permet un nouveau pas pour changer nos habitudes et réduire la pollution !"
      />

      {children}
    </div>
  );
};
