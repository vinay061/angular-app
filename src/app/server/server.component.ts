import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serverStatus:string = 'No server created';
  
  handleClick(){
    this.serverStatus = 'New Server Created';
  }
}
