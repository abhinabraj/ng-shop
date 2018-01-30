import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { DisplayAreaComponent } from './display-area/display-area.component';
import { ItemCardComponent } from './item-card/item-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeMsgComponent,
    DisplayAreaComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
