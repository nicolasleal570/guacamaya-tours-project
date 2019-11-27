import { SelectedRoom } from './SelectedRoom';
import { Destino } from './destino';
import { Hotel } from './hotel';
import { Category } from './category';
import { State } from './state';

export interface Itinerario {
  itinerario: any;
  [x: string]: any;


    $key?: string;
    destinoStateId: string;
    state?: string;
    destinoCategoryId: string;
    category?: string;
    destinoId: string;
    destino: Destino;
    checkIn: string;
    checkOut: string;
    hotelId: string;
    hotel: Hotel;
    numberOfHabs: number;
    habs: SelectedRoom[];
    totalPrice: number;
    numberOfDays: number;

}
