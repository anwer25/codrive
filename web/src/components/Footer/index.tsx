import { Button, Input, Link } from "@nextui-org/react";
import { FC } from "react";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className="col-span-12 text-background bg-blue-600 mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2>Aide</h2>
            <nav className="list-none mb-10 ">
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2>Covoiturage</h2>
            <nav className="list-none mb-10 ">
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  First Link
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  Second Link
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  Third Link
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-gray-800">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label className="leading-7 text-sm text-background">
                  Placeholder
                </label>
                <Input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-opacity-50   text-base outline-none text-background py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
                ></Input>
              </div>
              <Button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                SubScribe
              </Button>
            </div>
            <p className="text-background text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
