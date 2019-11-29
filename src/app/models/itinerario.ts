import { SelectedRoom } from './SelectedRoom';
import { Destino } from './destino';
import { Hotel } from './hotel';
import { Category } from './category';
import { State } from './state';

export interface Itinerario {

    $key?: string;
    destinoStateId: string;
    state?: string;
    destinoCategoryId: string;
    category?: string;
    destinoId: string;
    destino: string;
    checkInDays: number,
    checkInMonth: number,
    checkInYear: number,
    checkOutDays: number,
    checkOutMonth: number,
    checkOutYear: number,
    hotelId: string;
    hotel: string;
    numberOfHabs: number;
    habs: SelectedRoom[];
    totalPrice: number;
    numberOfDays: number;

}
