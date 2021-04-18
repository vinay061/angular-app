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
  
  serverNames = [
    "America",
    "Europe",
    "Africa",
    "Asia",
    "Australia",
    "Middle East",
    "Antartica"
  ];

  euroServers = [
    "Germany",
    "Luxembourg",
    "France",
    "Belgium",
    "Switzerland",
    "Netherland",
    "Spain",
    "Italy",
    "Portugal"
  ];

  asiaServers = [
    "India",
    "China",
    "Japan",
    "Taiwan",
    "Indonesia",
    "Vietnam",
    "Maldives",
    "Bangladesh",
    "Srilanka"
  ];

  viewmode = '';

  handleClick(){
    this.serverStatus = 'New Server Created';
  }
}
