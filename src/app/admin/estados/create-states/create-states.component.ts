import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminStatesService } from 'src/app/services/admin-states.service';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-create-states',
  templateUrl: './create-states.component.html',
  styleUrls: ['./create-states.component.scss']
})
export class CreateStatesComponent implements OnInit {

  createStateForm: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private stateservice: AdminStatesService) { }

  ngOnInit() {
    this.createStateForm = this.fb.group ({
      name: [''],
      imgBanner: [''],
    });

    this.loading = false;
  }

  onSubmit() {

    const state: State = {
      name: this.createStateForm.value.name,
      image: this.createStateForm.value.imgBanner,
    };

    console.log(state);
    this.loading = true;

    this.stateservice.createState(state).then(item => {
      console.log('Hecho!', item.id);
      this.loading = false;
      console.log(this.loading);
    });


  }

}
