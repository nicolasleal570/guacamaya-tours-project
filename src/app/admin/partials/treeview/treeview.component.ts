import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss']
})
export class TreeviewComponent implements OnInit {

  @Input() title: string;
  @Input() options?: any[];
  @Input() url?: string;
  @Input() icon?: string;

  treeOpen: boolean;

  constructor() {
    this.treeOpen = false;
  }

  ngOnInit() {
  }

  toggleTree() {
    this.treeOpen = !this.treeOpen;
  }

}
