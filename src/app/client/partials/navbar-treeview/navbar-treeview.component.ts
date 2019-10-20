import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-treeview',
  templateUrl: './navbar-treeview.component.html',
  styleUrls: ['./navbar-treeview.component.scss']
})
export class NavbarTreeviewComponent implements OnInit {

  dropdownOpen: boolean;

  @Input() title: string;
  @Input() options?: any[];
  @Input() url?: string;

  constructor() {
    this.dropdownOpen = false;
  }

  ngOnInit() {
  }

  showDropdown(){
    this.dropdownOpen = true;
  }

  hideDropdown(){
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
