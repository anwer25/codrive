import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import MockAdapter from "axios-mock-adapter";
import { client } from "../client";
import { BASE_URL, PUBLIC_ROUTES } from "@/constants";
import { rideItemResponse } from "../types";

export const $axios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

$axios.interceptors.request.use((requestConfig: InternalAxiosRequestConfig) => {
  const { accessToken } = client.auth.getLocalStorageData();
  const isPublicRoute = PUBLIC_ROUTES.includes(<string>requestConfig.url!);
  if (!isPublicRoute) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return requestConfig;
});

$axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await client.auth.refreshToken();
      return $axios(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const axiosMock = $axios;

// mock axios instance must be used in tests

const mock = new MockAdapter(axiosMock, { delayResponse: 1000 });

export const getAllRidesResponse: rideItemResponse = [
  {
    userId: "1",
    rideId: "1",
    from: "Tunisa",
    to: "Sfax",
    startDate: "11:15PM - 16/02/23",
    endDate: "1:15AM - 16/02/23",
    price: 100,
    places: 5,
    name: "Ahmed",
  },
  {
    userId: "2",
    rideId: "2",
    from: "Sfax",
    to: "Tunisa",
    startDate: "2:15AM - 16/02/23",
    endDate: "3:15AM - 16/02/23",
    price: 100,
    places: 5,
    name: "Ahmed",
  },
  {
    userId: "3",
    rideId: "3",
    from: "Gafsa",
    to: "Tunis",
    startDate: "4:15AM - 16/02/23",
    endDate: "6:15AM - 16/02/23",
    price: 100,
    places: 5,
    name: "Akrem",
  },
  {
    userId: "4",
    rideId: "4",
    from: "Tunis",
    to: "Gafsa",
    startDate: "7:15AM - 16/02/23",
    endDate: "9:15AM - 16/02/23",
    price: 100,
    places: 5,
    name: "Akrem",
  },
];

const userInfo = {
  userId: "1",
  firstName: "Ahmed",
  lastName: "Doe",
  email: "ahmed@gmail.com",
  phoneNumber: "123456789",
  address: "123 rue de la paix",
};

mock.onGet("/ride").reply(200, getAllRidesResponse);
mock.onGet("/profile").reply(200, userInfo);

mock.onGet("reservation").reply(200, getAllRidesResponse);
mock.onPost("auth/login/").reply(200, {
  access: "",
  refresh: "",
  user: { email: "" },
});
