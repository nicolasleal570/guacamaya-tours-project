import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() subtitle: string;
  @Input() img: string;

  ngOnInit() {
  }

}
