import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactCollection: AngularFirestoreCollection<Contact>

  constructor(private afs: AngularFirestore) {
    this.contactCollection = this.afs.collection('contact');
  }

  createContact(data: Contact){
    return this.contactCollection.add(data);
  }
}
