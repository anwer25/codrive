import { $axios, axiosMock } from "@/services/instance";
import { Axios, AxiosResponse } from "axios";
import { IAuthResponse } from "@/services/types";
import { enableMock } from "@/constants";

export class AuthApi {
  axios: Axios;
  constructor() {
    this.axios = enableMock ? axiosMock : $axios;
  }
  cleanLocalStorage() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  setLocalStorageData(data: IAuthResponse) {
    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
  }

  getLocalStorageData(): {
    accessToken: string | null;
    refreshToken: string | null;
  } {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
  }

  async login(payload: { email: string; password: string }) {
    try {
      const { data }: AxiosResponse<IAuthResponse> = await this.axios.post(
        "auth/login/",
        { username: payload.email, password: payload.password },
      );

      this.setLocalStorageData(data);

      return Promise.resolve(data);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch ({ message }) {
      return Promise.reject(message);
    }
  }

  async refreshToken() {
    try {
      const { data } = await this.axios.post<IAuthResponse>(
        "auth/token/refresh",
        {
          refresh: this.getLocalStorageData().refreshToken,
        },
      );

      this.setLocalStorageData(data);

      return Promise.resolve(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch ({ message }) {
      return Promise.reject(message);
    }
  }

  async logout(userId: string) {
    const { data } = await this.axios.post("auth/logout/ ", {
      id: userId,
    });

    return Promise.resolve(data);
  }
}
