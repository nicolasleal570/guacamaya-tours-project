import { Component, OnInit } from '@angular/core';
import { AdminHotelService } from 'src/app/services/admin-hotel.service';
import { Hotel } from 'src/app/models/hotel';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { AdminCategoryService } from 'src/app/services/admin-category.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  hotels: Hotel[] = [];
  categories: Category[] = [];
  hotelsLoading: boolean = false;
  categoriesLoading: boolean = false;

  constructor(private hotelService: AdminHotelService, private categorySV: AdminCategoryService) {
  }

  ngOnInit() {
    this.getCategoriesFormService();
    this.getFamousHotels();
  }

  getCategoriesFormService(){
    this.categoriesLoading = true;
    this.categorySV.getCategorys().subscribe(array => {
      this.categories = array.map(item => {
        const category: Category = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return category;
      });
      this.categoriesLoading = false;
      console.log(this.categories);
    });
  }

  getFamousHotels() {
    this.hotelsLoading = true;
    this.hotelService.getHotels().subscribe(array => {
      this.hotels = array.map(item => {
        const hotel: Hotel = {
          $key: item.payload.doc.id,
          ...item.payload.doc.data()
        }

        return hotel;
      });
      this.hotelsLoading = false;
    });
  }

}
