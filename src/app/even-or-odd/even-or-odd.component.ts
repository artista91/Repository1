import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-or-odd',
  templateUrl: './even-or-odd.component.html',
  styleUrls: ['./even-or-odd.component.css']
})
export class EvenOrOddComponent implements OnInit {
  allowNewServer=false;
  serverStatus="No Server Created";
  serverName="Test Server";

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverStatus="Server was created";
    return this.serverStatus;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
