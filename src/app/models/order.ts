import { Itinerario } from './itinerario';
import { Person } from './person';

export interface Order {

    $key: string;
    client: Person;
    status: string;
    locationId: string;
    itinerario: Itinerario;

}
