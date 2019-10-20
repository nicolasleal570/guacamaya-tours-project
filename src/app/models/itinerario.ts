import { Person } from './person';

export interface Itinerario {

    $key: string;
    hotelId: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    totalPrice: number;
    personGroup: Person[];

}
