import { Category } from './category';
import { State } from './state';
import { Location } from './location';

export interface Destino {

    $key?: string;
    name: string;
    description: string;
    categoryId: string;
    location: Location;
    stateId: string;
    city?: string;
    imgBanner: string;
    imgCultura: string[];
    imgGallery: any[];

}
