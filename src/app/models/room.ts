export interface Room {

    $key?: string;
    name: string;
    description: string;
    imgPresentation: string;
    maxPersons: number;
    adventajes: string[];
    gallery: string[];
    pricePerNight: number;
    hotelId: string;
    available: number;

}
