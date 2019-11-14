import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], key: string): any[] {
    if (!key) return lista
    return lista.filter( destino => destino.$key.includes(key))
  }

}
