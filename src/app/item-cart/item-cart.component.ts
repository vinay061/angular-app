import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {

  constructor() { }
  
@Input() items;




  ngOnInit(): void {
  }

}
