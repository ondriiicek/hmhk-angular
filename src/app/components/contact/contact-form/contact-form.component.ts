import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'subject': new FormControl(null, Validators.required),
    'message': new FormControl(null, [Validators.required, Validators.maxLength(10)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contactForm.value.name);
    this.contactForm.reset();
  }
}
