import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state';
import { AdminStatesService } from 'src/app/services/admin-states.service';




@Component({
  selector: 'app-all-states',
  templateUrl: './all-states.component.html',
  styleUrls: ['./all-states.component.scss']
})
export class AllStatesComponent implements OnInit {

  state: State[] = [];
  loading: boolean = false;


  constructor(private sService: AdminStatesService) { }

  ngOnInit() {
    this.getStatesFromService();
  }
  getStatesFromService() {
  }

  deleteState($key: string) {
    this.sService.deletedState($key).then(() => {

      console.log('Object eliminado');
    }).finally(() => {


    });
  }

  getStateFromService() {
    this.loading = true;
    this.state = [];
    this.sService.getStates().subscribe((actionArray) => {
      this.state = actionArray.map(item => {
        const state: State = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        };

        return state;
      });


      this.loading = false;

    });

  }

}
