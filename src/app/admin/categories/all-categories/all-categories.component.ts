import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AdminCategoryService } from 'src/app/services/admin-category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  categories: Category[] = [];
  loading: boolean = false;
  deleting: boolean = false;

  constructor(private catService: AdminCategoryService) { }

  ngOnInit() {
    this.catService.getCategorys().subscribe(arr => {
      this.categories = arr.map(x => {
        const cat: Category = {
          $key: x.payload.doc.id,
          ...x.payload.doc.data()
        }

        return cat;
      });
    });
  }

  deleteCategory($key: string) {
    this.deleting = true;
    this.catService.deletedCategory($key).then(() => {

      console.log('Object eliminado');
      this.deleting = false;

    }).catch(err => {
      console.log(err);
      this.deleting = false;
    }).finally(() => {

      this.deleting = false;

    });
  }

}
