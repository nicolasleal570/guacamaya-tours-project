import { Location } from './location';
import { State } from './state';
import { Room } from './room';

export interface Hotel {

    $key: string;
    name: string;
    stars: number;
    location: Location;
    state: State;
    city?: string;
    imgPresentation: string;
    gallery: string[];
    fullDay: boolean;
    services: string[];
    activities: string[];
    rooms: Room[];

}
