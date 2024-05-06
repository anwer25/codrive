import { icons } from "lucide-react";
import { FC } from "react";

export const IconComponent: FC<{ name: never; size: never; color: never }> = ({
  name,
  size,
  color,
}) => {
  const Icon = icons[name];
  return <Icon size={size} color={color} />;
};
