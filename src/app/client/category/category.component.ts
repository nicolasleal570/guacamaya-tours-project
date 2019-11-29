import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  loading: boolean = false;

  constructor(private cService: AdminCategoryService) { }

  ngOnInit() {
    this.getCategoriesFromService();
  }

  getCategoriesFromService() {
    this.loading = true;
    this.cService.getCategorys().subscribe((actionArray) => {
      this.categories = actionArray.map(item => {
        const category: Category = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()

        };
        console.log(category);

        return category;

      });

      this.loading = false;
    });
  }

}
