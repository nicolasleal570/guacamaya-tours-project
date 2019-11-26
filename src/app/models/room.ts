export interface Room {

    $key?: string;
    name: string;
    description: string;
    imgPresentation: string;
    maxPersons: number;
    adventajes: string[];
    gallery: string[];
    pricePerNight: string;
    hotelId: string;
    available: number;

}
