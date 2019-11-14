import { Pipe, PipeTransform } from '@angular/core';
import { Destino } from '../models/destino';

@Pipe({
  name: 'searchByCategory'
})
export class SearchByCategoryPipe implements PipeTransform {

  transform(destinos: Destino[], categoryId: string): Destino[] {
    if (!categoryId) return destinos;

    return destinos.filter(destino => {
      return destino.categoryId === categoryId;
    });

  }

}
