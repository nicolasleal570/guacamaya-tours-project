import { Category } from './category';
import { State } from './state';
import { Location } from './location';
import { Hotel } from './hotel';

export interface Destino {

    $key: string;
    name: string;
    description: string;
    category: Category;
    location: Location;
    services: string[];
    activities: string[];
    state: State;
    city?: string;

}
