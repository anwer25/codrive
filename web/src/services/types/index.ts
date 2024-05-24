export interface IAuthResponse {
  access: string;
  refresh: string;
  user: unknown;
}

export interface IRideItem {
  userId: string;
  rideId: string;
  from: string;
  to: string;
  startDate: string;
  endDate: string;
  price: number;
  places: number;
  name: string;
}

export interface IRider {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export type rideItemResponse = IRideItem[];
export type reservationResponse = IRideItem[];
export type riderResponse = IRider[];
export type profileResponse = IRider;