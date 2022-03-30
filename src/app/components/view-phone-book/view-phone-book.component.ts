import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl
} from '@angular/forms';
import {
  PhonebookService
} from 'src/app/service/phonebook.service';

@Component({
  selector: 'app-view-phone-book',
  templateUrl: './view-phone-book.component.html',
  styleUrls: ['./view-phone-book.component.css']
})
export class ViewPhoneBookComponent implements OnInit {
  phoneBookList: any;
  searchForm: any;
  filteredPhoneBookList: any;

  constructor(private _fb: FormBuilder, private phonebookService: PhonebookService) {
    this.phoneBookList = this.phonebookService.getPhoneBookData()
    this.filteredPhoneBookList = this.phoneBookList
  }

  ngOnInit(): void {
    /** Search form**/
    this.searchForm = this._fb.group({
      searchNumber: new FormControl(''),
    })

  }
  /** Search box**/
  applySarchFilter(event: KeyboardEvent) {
    let inputValue = this.searchForm.controls['searchNumber'].value;
    if (event.code === 'Backspace' && !inputValue) {
      this.filteredPhoneBookList = this.phoneBookList
    } else {
      this.filteredPhoneBookList = this.phoneBookList.filter((item: any) =>   
        item.PhoneNumber.includes(inputValue) || item.Name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
  }

}
