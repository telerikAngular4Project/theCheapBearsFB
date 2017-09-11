export class Trip {
    id: number;
    fromCity: string;
    toCity: string;
    price: number;
    date: Date;
    departureTime: object;
    freeSeats: number;
    additionalComment: string;
    createdOn: string;
    userId: string;
    luggage: number;
    passengers: any[];
    car: any;
    ['$key']: string;
}
