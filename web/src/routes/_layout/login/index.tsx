import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@nextui-org/react";
import { FC, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { client } from "@/services/client";
import { IAuthResponse } from "@/services/types";

const Login: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigation = Route.useNavigate();
  const signIn = useCallback(
    ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }): Promise<IAuthResponse> => {
      return client.auth.login({ email, password });
    },
    [],
  );

  const mutation = useMutation({ mutationKey: ["login"], mutationFn: signIn });
  mutation.isSuccess && navigation({ to: "/dashboard" });
  return (
    <main className="col-span-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Co-drive
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Connectez-vous à votre compte
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Link className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Mot de passe oublié?
                </Link>
              </div>
              <Button
                onClick={() =>
                  mutation.mutate({ email: email!, password: password! })
                }
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous n'avez pas encore de compte?
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  S'inscrire
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export const Route = createFileRoute("/_layout/login/")({
  component: Login,
});
