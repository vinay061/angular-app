import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {
  booksArray = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBooks().subscribe( res => {
      this.booksArray = res;
    })
  }

}
