import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhonebookService } from 'src/app/service/phonebook.service';

@Component({
  selector: 'app-add-phone-book',
  templateUrl: './add-phone-book.component.html',
  styleUrls: ['./add-phone-book.component.css']
})
export class AddPhoneBookComponent implements OnInit {
  addForm!: FormGroup ;
  submitted: boolean = false;
  phoneBookList: any =[];
  sucessMsg: boolean = false;
 

  constructor( private _fb: FormBuilder, private phonebookService: PhonebookService) { 
    if(this.phonebookService.getPhoneBookData()){ 
      this.phoneBookList = this.phonebookService.getPhoneBookData() 
    }
  }

  ngOnInit(): void {
    this.addForm = this._fb.group({ 
      Name: ['', Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })  
  }
 
  get addFormControl() { return this.addForm.controls; }
 
  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    } 
    this.sucessMsg = true
    this.phoneBookList.push(this.addForm.value)
    this.submitted = false;
    this.addForm.reset();
    this.phonebookService.publishPhoneBook(this.phoneBookList)
    setTimeout(() => this.sucessMsg = false, 1500);  
  }
}
