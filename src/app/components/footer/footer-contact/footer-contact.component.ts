import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact/contact.service';
import { Contact } from '../../shared/contact.model';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {
  contacts : Contact[] = [];

  constructor( private contactService : ContactService ) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getFooterContact();
  }

}
