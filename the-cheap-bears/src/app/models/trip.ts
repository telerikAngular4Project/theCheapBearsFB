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
    baggage: number;
    author: string;
    phonenumber?: number|string;
    profileImageUrl?: string;
}
