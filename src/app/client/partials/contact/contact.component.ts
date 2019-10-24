import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact = new FormGroup ({
    name: new FormControl(),
    email: new FormControl(),
    asunto: new FormControl(),
    message: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
    this.contact = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      passwordRepeat: new FormControl('')
    });
  }

}
