import { Category } from './category';
import { State } from './state';
import { Location } from './location';

export interface Destino {

    $key: string;
    name: string;
    description: string;
    category: Category;
    location: Location;
    state: State;
    city?: string;
    imgBanner: string;

}
