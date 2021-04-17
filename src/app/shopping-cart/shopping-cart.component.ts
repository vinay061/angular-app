import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    'MILK',
    'EGGS',
    'BREAD'
  ];

  handleDelete(deletedItem){
    this.items = this.items.filter( item => item!== deletedItem);
    
  }
}
