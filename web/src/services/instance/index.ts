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
    from: "from",
    to: "to",
    startDate: "2021-10-01T00:00:00Z",
    endDate: "2021-10-01T00:00:00Z",
    price: 100,
    places: 1,
    name: "name",
  },
  {
    userId: "2",
    rideId: "2",
    from: "from",
    to: "to",
    startDate: "2021-10-01T00:00:00Z",
    endDate: "2021-10-01T00:00:00Z",
    price: 100,
    places: 1,
    name: "name",
  },
  {
    userId: "3",
    rideId: "3",
    from: "from",
    to: "to",
    startDate: "2021-10-01T00:00:00Z",
    endDate: "2021-10-01T00:00:00Z",
    price: 100,
    places: 1,
    name: "name",
  },
  {
    userId: "4",
    rideId: "4",
    from: "from",
    to: "to",
    startDate: "2021-10-01T00:00:00Z",
    endDate: "2021-10-01T00:00:00Z",
    price: 100,
    places: 1,
    name: "name",
  },
  {
    userId: "5",
    rideId: "5",
    from: "from",
    to: "to",
    startDate: "2021-10-01T00:00:00Z",
    endDate: "2021-10-01T00:00:00Z",
    price: 100,
    places: 1,
    name: "name",
  },
];

mock.onGet("/ride").reply(200, getAllRidesResponse);

mock.onGet("reservation").reply(200, getAllRidesResponse);
