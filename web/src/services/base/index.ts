import { enableMock } from "@/constants";
import { $axios, axiosMock } from "@/services/instance";
import { Axios } from "axios";

export class BaseApi {
  axios: Axios;
  url: string;
  constructor(url: string) {
    this.axios = enableMock ? axiosMock : $axios;
    this.url = url;
  }

  async get<TResponse>(query: string = ""): Promise<TResponse> {
    try {
      const { data } = await this.axios.get<TResponse>(`${this.url}${query}`);
      return Promise.resolve(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch ({ message }) {
      return Promise.reject(message);
    }
  }

  async create<TPayload, TResponse>(payload: TPayload): Promise<TResponse> {
    try {
      const { data } = await this.axios.post<TResponse>(`${this.url}`, payload);
      return Promise.resolve(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch ({ message }) {
      return Promise.reject(message);
    }
  }

  async delete<TResponse>(id: string): Promise<TResponse> {
    try {
      const { data } = await this.axios.delete<TResponse>(`${this.url}/${id}`);
      return Promise.resolve(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch ({ message }) {
      return Promise.reject(message);
    }
  }

  async update<TPayload, TResponse>(
    id: string,
    payload: TPayload,
  ): Promise<TResponse> {
    try {
      const { data } = await this.axios.patch<TResponse>(
        `${this.url}/${id}`,
        payload,
      );
      return Promise.resolve(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch ({ message }) {
      return Promise.reject(message);
    }
  }
}
