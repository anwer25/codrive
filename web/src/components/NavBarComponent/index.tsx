import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../SearchIcon";

export const NavBarComponent: FC = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Co-drive</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={
              <SearchIcon size={18} width={undefined} height={undefined} />
            }
            type="search"
          />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center space-x-28" justify="end">
        <Button as={Link} color="primary" to={"/login"} variant="flat">
          Connexion
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            >
              En savoir plus
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="links" variant="flat">
            <DropdownItem key="FQA">
              <Link to="/faq">FAQ</Link>
            </DropdownItem>
            <DropdownItem key="espace_presse">
              <Link to={"/espace_presse"}> Espace Presse</Link>
            </DropdownItem>
            <DropdownItem key="covoiturage_qutidiens">
              <Link to={"covoiturage_qutidiens"}> Covoiturage quotidiens</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
