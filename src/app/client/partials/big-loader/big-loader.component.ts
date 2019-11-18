import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-loader',
  templateUrl: './big-loader.component.html',
  styleUrls: ['./big-loader.component.scss']
})
export class BigLoaderComponent implements OnInit {

  @Input() absoluteClass?: boolean = false; 
  @Input() smallClass?: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

}
