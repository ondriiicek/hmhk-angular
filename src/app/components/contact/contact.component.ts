import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts : Contact[] = [];

  constructor( private contactService : ContactService ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

}
