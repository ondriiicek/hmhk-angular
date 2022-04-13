import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Contact } from '../shared/models/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts : Contact[] = [];

  constructor( private contactService : ContactService,
               private dataService : DataService ) { }

  ngOnInit(): void {
    this.dataService.fetchContacts().subscribe(
      contacts => {
        this.contacts = contacts;
        this.contactService.setContacts(contacts);
      }
    )
  }

}
