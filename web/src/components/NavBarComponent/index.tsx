import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { FC } from "react";

export const NavBarComponent: FC = () => {
  return (
    <Navbar isBordered className="col-span-12">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link to="/" className="hidden sm:block font-bold text-inherit">
            Co-drive
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center space-x-28" justify="end">
        <Button
          as={Link}
          className="bg-blue-600 text-background text-center"
          to={"/login"}
          variant="flat"
        >
          Connexion
        </Button>
      </NavbarContent>
    </Navbar>
  );
};
