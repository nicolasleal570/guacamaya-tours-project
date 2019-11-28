import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminCategoryService } from 'src/app/services/admin-category.service';
import { Category } from 'src/app/models/category';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm: FormGroup;
  loading: boolean;
  editCategory: Category;

  constructor(private fb: FormBuilder, private catService: AdminCategoryService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.createCategoryForm = this.fb.group({
      name: [''],
      imgBanner: [''],
    });

    this.loading = false;
    this.route.paramMap.subscribe(params => {
      const id =params.get('idCategoria');
      if (id) {
        this.selectCategoryToEdit(id);
      }
    });

  }

  selectCategoryToEdit(idCategory: string){
    this.catService.getCategoryById(idCategory).subscribe(elem=>{
      const category: Category = {
        $key: elem.payload.id,
        ...elem.payload.data()
      }
      this.editCategory = category;
      console.log(category);
      this.editSelectedCategory(category);
    });
  }

  editSelectedCategory(category: Category){
    this.createCategoryForm.patchValue({
      name: category.name,
      imgBanner: category.img,
    });
  }

  onSubmit() {

    const category: Category = {
      name: this.createCategoryForm.value.name,
      img: this.createCategoryForm.value.imgBanner,
    };

    this.loading = true;

    if(this.editCategory) {
      this.catService.updateCategory(category, this.editCategory.$key).then( () => {
        console.log('editado', category.$key);
        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.loading = false;
      }).finally( () => {
        this.router.navigate(['/admin/categorias']);
      });
    } else {
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

}
