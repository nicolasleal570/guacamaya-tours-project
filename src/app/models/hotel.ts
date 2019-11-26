import { Location } from './location';
import { State } from './state';
import { Room } from './room';

export interface Hotel {

    $key?: string;
    name: string;
    stars: number;
    location: Location;
    stateId: string;
    destinoId: string;
    imgPresentation: string;
    gallery: string[];
    fullDay: boolean;
    services: string[];
    activities: string[];

}
