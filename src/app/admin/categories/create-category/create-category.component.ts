import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private catService: AdminCategoryService, private router: Router) { }

  ngOnInit() {
    this.createCategoryForm = this.fb.group({
      name: [''],
      imgBanner: [''],
    });

    this.loading = false;

  }

  onSubmit() {

    const category: Category = {
      name: this.createCategoryForm.value.name,
      img: this.createCategoryForm.value.imgBanner,
    };

    this.loading = true;

    this.catService.createCategory(category).then(item => {
      console.log('Creado!', item.id);
    }).catch(err => {
      console.log(err);
      this.loading = false;

    }).finally(() => {
      this.router.navigate(['/admin/categorias']);
      this.loading = false;
    });



  }

}
