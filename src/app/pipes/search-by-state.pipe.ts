import { Pipe, PipeTransform } from '@angular/core';
import { Destino } from '../models/destino';

@Pipe({
  name: 'searchByState'
})
export class SearchByStatePipe implements PipeTransform {

  transform(destinos: Destino[], stateId?: string, categoryId?: string): Destino[] {

    if (!stateId && !categoryId) return destinos;

    return destinos.filter(destino => {
      return (destino.stateId === stateId) || (destino.categoryId === categoryId);
    });
  }

}
