import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contact = this.fb.group({
      name: [''],
      email: [''],
      asunto: [''],
      message: [''],
    });
  }

}
