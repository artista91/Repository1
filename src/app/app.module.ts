import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


//import { OnInit, Component, ElementRef } from '@angular/core';
import { DataServiceService} from './data-service.service';
import { DService} from './d.service';
import { Service1Service} from './service1.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EvenOrOddComponent } from './even-or-odd/even-or-odd.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { D1Directive } from './d1.directive';
import { D2Directive } from './d2.directive';
import { NewdirDirective } from './newdir.directive';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { DirectiveOneDirective } from './directive-one.directive';
//import { F2Component } from './f2/f2.component';
//import { F3Component } from './f3/f3.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // FooterComponent,
    ServerComponent,
    ServersComponent,
    EvenOrOddComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    C1Component,
    C2Component,
    C3Component,
    D1Directive,
    D2Directive,
    NewdirDirective,
    A1Component,
    A2Component,
    Form1Component,
    Form2Component,
    DirectiveOneDirective
    //F1Component,
    //F2Component,
    //F3Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DataServiceService,DService, Service1Service],
  bootstrap: [AppComponent]

})
export class AppModule { 


}
