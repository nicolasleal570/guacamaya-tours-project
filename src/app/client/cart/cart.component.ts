import { Component, OnInit } from '@angular/core';
import { Itinerario } from 'src/app/models/itinerario';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  reservaciones: Itinerario[];
  total: number = 0;
  
  constructor() { 

    this.total = 0;

    if (localStorage.getItem('cart') !== null) {
      this.reservaciones = JSON.parse(localStorage.getItem('cart'));
    }

    this.reservaciones.forEach((item, index)=>{
      this.total = this.total + item.totalPrice;
    })

  }

  ngOnInit() {


  }

  eliminarReserva(currentItem: string, index: number) {
    delete this.reservaciones[currentItem];
    localStorage.removeItem(currentItem);
    location.reload();
  }

}
