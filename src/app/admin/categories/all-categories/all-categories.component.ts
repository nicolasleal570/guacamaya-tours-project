import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  categories: Category[] = [];
  loading: boolean = false;
  deleting: boolean = false;

  constructor(private catService: AdminCategoryService , private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.catService.getCategorys().subscribe(arr => {
      this.categories = arr.map(x => {
        const cat: Category = {
          $key: x.payload.doc.id,
          ...x.payload.doc.data()
        }

        return cat;
      });
      this.loading = false;
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

  editButtonClick(id: string){
    this.router.navigate(['/admin/categorias', id, 'editar']);
  }

}
