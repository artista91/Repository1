import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName="Testserver";
  // a=document.calculator.one.value;
  age=22;
  Name="Atif";

  constructor() { 

  }

  ngOnInit() {
  }

}
