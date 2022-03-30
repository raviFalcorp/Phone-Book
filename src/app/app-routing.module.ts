import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AddPhoneBookComponent } from './components/add-phone-book/add-phone-book.component';
import { ViewPhoneBookComponent } from './components/view-phone-book/view-phone-book.component';

const routes: Routes = [
  { path: 'add-phone-book', component: AddPhoneBookComponent },
  { path: 'view-phone-book', component: ViewPhoneBookComponent },
  { path: '', redirectTo: '/add-phone-book', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }