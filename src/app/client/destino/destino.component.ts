import { Component, OnInit, Input } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { AdminDestinoService } from 'src/app/services/admin-destino.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {

  destinos: Destino[] = [];
  loading: boolean = false;
  category: string;
  categoryId: string = '';
  stateId: string = '';

  constructor(private dService: AdminDestinoService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      const catId = params.get('categoryId');
      const stateId = params.get('stateId');
      if (catId) {
        this.categoryId = catId;
      } else if(stateId) {
        this.stateId = stateId;
      }
    });

  }

  ngOnInit() {
    if (this.categoryId !== '') {
      this.getDestinosFromServiceByCategory();
      console.log(this.categoryId);
    } else if(this.stateId !== '') {
      this.getStatesFromServiceByState();
    } else {
      this.getDestinosFromService();
    }
  }

  getStatesFromServiceByState() {
    this.loading = true;
    this.destinos = [];
    this.dService.getDestinosByState(this.stateId).then(array => {
      array.forEach(item => {
        const dest: Destino = {
          $key: item.id,
          name: item.get('name'),
          description: item.get('description'),
          categoryId: item.get('categoryId'),
          location: item.get('location'),
          stateId: item.get('stateId'),
          imgBanner: item.get('imgBanner'),
          imgCultura: item.get('imgCultura'),
          imgGallery: item.get('imgGallery'),
        }

        this.destinos.push(dest);
      });
    }).catch(err => {
      console.log(err);
      this.loading = false;
    }).finally(() => {

      this.loading = false;

    });
  }

  getDestinosFromServiceByCategory() {
    this.destinos = [];
    this.loading = true;
    this.dService.getDestinosByCategories(this.categoryId).then(array => {
      array.forEach(item => {
        const dest: Destino = {
          $key: item.id,
          name: item.get('name'),
          description: item.get('description'),
          categoryId: item.get('categoryId'),
          location: item.get('location'),
          stateId: item.get('stateId'),
          imgBanner: item.get('imgBanner'),
          imgCultura: item.get('imgCultura'),
          imgGallery: item.get('imgGallery'),
        }

        this.destinos.push(dest);
      });
    }).catch(err => {
      console.log(err);
      this.loading = false;
    }).finally(() => {

      this.loading = false;

    });
  }

  getDestinosFromService() {
    this.loading = true;
    this.destinos = [];
    this.dService.getDestinos().subscribe((actionArray) => {
      this.destinos = actionArray.map(item => {
        const destino: Destino = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return destino;

      });

      this.loading = false;

    });
  }

}
