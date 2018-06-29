import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

 styleUrls: ['./header.component.css']

// template:`
// <div class="tabs-selection">
// <my-tab [active]="isSelected(1)" (click)="setTab(1)"> Tab 1 </my-tab>
// <my-tab [active]="isSelected(2)" (click)="setTab(2)"> Tab 2 </my-tab>
// <my-tab [active]="isSelected(3)" (click)="setTab(3)"> Tab 3 </my-tab>
// </div>

// <div [ngSwitch]="tab">
// <app-tab-content *ngSwitchCase="1">Tab content 1</app-tab-content>
// <app-tab-content *ngSwitchCase="2">Tab content 2</app-tab-content>
// <app-tab-content *ngSwitchCase="3"><app-tab-3></app-tab-3></app-tab-content>
// <app-tab-content *ngSwitchDefault>Select a tab</app-tab-content>
// </div>
// `
})
export class HeaderComponent implements OnInit {
// tab: number = 0;

  constructor() { }

  ngOnInit() {
  }

  // setTab(num:number){
  // 	this.tab=num;
  // }

  // isSelected(num:number){
  // 	return this.tab === num;
  // }

}
