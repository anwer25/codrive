import { sideBarLink } from "@/constants";
import { Button, Divider } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { FC } from "react";

export const AsideComponent: FC = () => {
  return (
    <aside className="col-span-0 hidden  md:col-span-2 md:block z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 overflow-y-auto bg-gray-800 pt-5">
        <Link
          to="/dashboard"
          className="flex items-center justify-center ps-2.5 mb-5"
        >
          <span className="text-2xl font-bold text-gray-100 ms-2 text-center">
            Co-drive
          </span>
        </Link>
        <Divider className="my-4 bg-background" />
        <ul className="space-y-2 font-medium h-[74%]">
          {sideBarLink.map((link, index) => {
            if (link.name.includes("profile")) {
              return (
                <>
                  <li key={index} className="relative">
                    <Link
                      to={link.path}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 transition-colors duration-200 rounded-md hover:bg-orange-400 "
                      activeOptions={{ exact: true }}
                      activeProps={{
                        className: " bg-orange-400  ",
                      }}
                    >
                      <span className="flex items-center">
                        <link.icon className="w-5 h-5 me-2" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                </>
              );
            }
            return (
              <li key={index} className="relative">
                <Link
                  to={link.path}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-100 transition-colors duration-200 rounded-md hover:bg-orange-400 "
                  activeOptions={{ exact: true }}
                  activeProps={{
                    className: " bg-orange-400  ",
                  }}
                >
                  <span className="flex items-center">
                    <link.icon className="w-5 h-5 me-2" />
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Divider className="my-4 bg-background" />

        <Button className=" bg-orange-600 w-full text-background">
          <LogOut />
          <span className="ms-2">Se déconnecter</span>
        </Button>
      </div>
    </aside>
  );
};
