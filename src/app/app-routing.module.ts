import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ServerComponent } from './server/server.component';
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
    }
  ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
