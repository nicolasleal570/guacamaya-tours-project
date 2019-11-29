import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ActivatedRoute, Params } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ContactService } from 'src/app/services/contact.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contact: Contact;


  constructor(private fb: FormBuilder,  private contactServ: ContactService) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      contactName: [''],
      contactEmail: [''],
      contactAsunto: [''],
      contactMessage: [''],
    });
  }


  contactar() {

    this.contact = {
      contactName: this.contactForm.value.contactName,
      contactEmail: this.contactForm.value.contactEmail,
      contactAsunto: this.contactForm.value.contactAsunto,
      contactMessage: this.contactForm.value.contactMessage,
    }

    this.contactServ.createContact(this.contact).then(item => {
      console.log(item);
    });

    this.contactForm.patchValue({
      contactName: '',
      contactAsunto: '',
      contactEmail: '',
      contactMessage: '',
    });

  }


}
