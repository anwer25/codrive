import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { Link } from "@tanstack/react-router";
import { FC } from "react";

export const NavBarComponent: FC = () => {
  return (
    <Navbar isBordered className="col-span-12">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Co-drive</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center space-x-28" justify="end">
        <Button as={Link} color="primary" to={"/login"} variant="flat">
          Connexion
        </Button>
      </NavbarContent>
    </Navbar>
  );
};
