import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './components/header/header.component';
import { AddPhoneBookComponent } from './components/add-phone-book/add-phone-book.component';
import { ViewPhoneBookComponent } from './components/view-phone-book/view-phone-book.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPhoneBookComponent,
    ViewPhoneBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
