import { ISideBarLink } from "@/types";
import { QueryClient } from "@tanstack/react-query";
import { History, Home, PhoneIncoming, User } from "lucide-react";

export const queryClient = new QueryClient();

export const BASE_URL = "http://localhost:8000/api/";

export const PUBLIC_ROUTES = ["/auth/login", "/auth/register"];

export const sideBarLink: ISideBarLink[] = [
  {
    name: "Accueil",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Profil",
    path: "/dashboard/profile",
    icon: User,
  },
  {
    name: "Histoire",
    path: "/dashboard/history",
    icon: History,
  },
  {
    name: "Réservations",
    path: "/dashboard/reservation",
    icon: PhoneIncoming,
  },
];

export const enableMock = true;
