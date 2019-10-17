import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss']
})
export class AllHotelsComponent implements OnInit {

  hotels: [];

  constructor() {
    this.hotels = [];
  }

  ngOnInit() {
  }

}
