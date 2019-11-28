import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alternative-header',
  templateUrl: './alternative-header.component.html',
  styleUrls: ['./alternative-header.component.scss']
})
export class AlternativeHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() background: string;

  constructor() { }

  ngOnInit() {
  }

}
