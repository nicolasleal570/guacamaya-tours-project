import { SelectedRoom } from './SelectedRoom';

export interface Itinerario {

    $key?: string;
    destinoStateId: string;
    destinoCategoryId: string;
    destinoId: string;
    checkIn: string;
    checkOut: string;
    hotelId: string;
    numberOfHabs: number;
    habs: SelectedRoom[];
    totalPrice?: number;

}
