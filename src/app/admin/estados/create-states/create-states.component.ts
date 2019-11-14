import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { State } from 'src/app/models/state';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-states',
  templateUrl: './create-states.component.html',
  styleUrls: ['./create-states.component.scss']
})
export class CreateStatesComponent implements OnInit {

  createStateForm: FormGroup;
  loading: boolean = false;
  editState: State = null;

  constructor(private fb: FormBuilder, private stateservice: AdminStatesService, 
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this.createStateForm = this.fb.group({
      name: [''],
      imgBanner: [''],
    });

    this.loading = false;

    this.route.paramMap.subscribe(params => {
      const estadoId = params.get('idEstado');
      if (estadoId) {
        this.getEstado(estadoId);
      }
    });
  }

  getEstado(id: string) {
    this.stateservice.getStateById(id).subscribe(estado => {
      const state: State = {
        $key: estado.payload.id,
        name: estado.payload.get('name'),
        image: estado.payload.get('image'),
      };
      this.editEstado(state);
    }, err => console.log(err));
  }

  editEstado(estado: State) {
    this.editState = estado;
    this.createStateForm.patchValue({
      name: estado.name,
      imgBanner: estado.image,
    });
  }

  onSubmit() {

    const state: State = {
      name: this.createStateForm.value.name,
      image: this.createStateForm.value.imgBanner,
    };
    
    this.loading = true;

    if (this.editState) { // Se está editando

      this.stateservice.updateState(state, this.editState.$key).then(() => {
        console.log('Editado!', this.editState.$key);
        this.router.navigate(['/estados']);
      });

    } else {

      this.stateservice.createState(state).then(item => {
        console.log('Creado!', item.id);
        this.router.navigate(['/estados']);
      });

    }
    
    this.loading = false;

  }

}
