import { Pipe, PipeTransform } from '@angular/core';
import { Destino } from '../models/destino';

@Pipe({
  name: 'searchByState'
})
export class SearchByStatePipe implements PipeTransform {

  transform(destinos: Destino[], stateId: string = '', categoryId: string = ''): Destino[] {

    if (!stateId && !categoryId) return destinos;

    if (stateId && !categoryId) {
      return destinos.filter(item => {
        return item.stateId === stateId;
      });
    } else {
      if (categoryId && !stateId) {
        return destinos.filter(item => {
          return item.categoryId === categoryId;
        });
      } else {
        return destinos.filter(item => {
          return item.stateId === stateId && item.categoryId === categoryId;
        });
      }
    }
  }

}
