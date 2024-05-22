import { AuthApi } from "../auth";
import { BaseApi } from "../base";

export const client = {
  auth: new AuthApi(),
  ride: new BaseApi("ride"),
  reservation: new BaseApi("reservation"),
};
