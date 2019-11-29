import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {
  getCategories() {
    throw new Error("Method not implemented.");
  }

  private stateCollection: AngularFirestoreCollection<Category>;

  constructor(private afs: AngularFirestore) {
    this.stateCollection = this.afs.collection<Category>('category');
  }

  getCategoryById(docId: string) {
    return this.stateCollection.doc<Category>(docId).snapshotChanges();
  }

  getCategorys() {
    return this.stateCollection.snapshotChanges();
  }

  createCategory(data: Category) {
    return this.stateCollection.add(data);
  }

  updateCategory(data: any, docId: string) {
    return this.stateCollection.doc(docId).update(data);
  }

  deletedCategory(docId: string) {
    return this.stateCollection.doc(docId).delete();
  }
}
