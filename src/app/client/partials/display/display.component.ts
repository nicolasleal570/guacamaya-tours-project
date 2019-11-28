import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() category?: Category;

  constructor() { }
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() img?: string;

  ngOnInit() {
    
  }

}
