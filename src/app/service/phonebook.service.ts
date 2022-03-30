import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  phoneBookList: any;

  constructor() { }
  publishPhoneBook(phoneBook:any) {
    this.phoneBookList = phoneBook; 
  }

  getPhoneBookData(){ 
    return this.phoneBookList;
  }
}
