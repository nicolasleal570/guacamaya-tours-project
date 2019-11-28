import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { FormsModule, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  states: State[] = [];
  categories: Category[] = [];
  destinos: Destino[] = [];
  selectedState: string = '';
  selectedCategory: string = '';
  destinosLoading: boolean = false;
  categoriesLoading: boolean = false;
  statesLoading: boolean = false;


  constructor(private stateService: AdminStatesService, private dService: AdminDestinoService, private categorySV: AdminCategoryService) { }

  ngOnInit() {

    this.getStatesFromService();
    this.getCategoriesFromService();
    this.getDestinosFromService();

  }

  getStatesFromService() {
    this.statesLoading = true;
    this.stateService.getStates().subscribe((states) => {
      this.states = states.map(item => {
        const state: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return state;
      })
      this.statesLoading = false;
    });
  }

  getCategoriesFromService() {
    this.categoriesLoading = true;
    this.categorySV.getCategorys().subscribe(array => {
      this.categories = array.map(item => {
        const category: Category = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return category;
      });
      this.categoriesLoading = false;
    });
  }

  getDestinosFromService() {
    this.destinosLoading = true;
    this.destinos = [];
    this.dService.getDestinos().subscribe((actionArray) => {
      this.destinos = actionArray.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return destino;

      });

      this.destinosLoading = false;

    });
  }



}
