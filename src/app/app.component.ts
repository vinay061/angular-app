import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newServerName:string = 'no server yet';
  serverAdd:boolean = false;
  addServer(){
    setTimeout(() => {
      this.serverAdd = true;
    },5000)
  }

  createNewServer(){
    this.newServerName = 'server-created';
  }
}
