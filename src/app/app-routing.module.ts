import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ServerComponent } from './server/server.component';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { BookCartComponent } from './book-cart/book-cart.component';
const routes: Routes = [];
  /*{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'server',
    component: ServerComponent
  }
];*/

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'shopping-cart',
      component: ShoppingCartComponent
    },
    {
      path: 'server',
      component: ServerComponent
    },
    {
      path: 'item-cart',
      component: ItemCartComponent
    },
    {
      path: 'book-cart',
      component: BookCartComponent 
    }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
