export class Trip {
  id?: string;
  fromCity: string;
  toCity: string;
  price: number;
  date: Date;
  departureTime: object;
  freeSeats: number;
  additionalComment: string;
  createdOn: Date;
  userId: string;
}
