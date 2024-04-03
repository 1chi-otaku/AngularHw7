import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] // Fix typo here
})
export class FormComponent {

  

  submitForm(form: NgForm){
    console.log(form);
  }

  
}