import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {
  
  //zmenit
  contacts : Contact[] = [
    {
      position: 'Trener U12',
      name: 'Branislav Stefan',
      email: 'maros.hric@email.com',
      phone: '+421908677578',
      image: '/assets/img/marosHric.png'
    
    },
    {
      position: 'Trener U12',
      name: 'Anton Ajben',
      email: 'maros.hric@email.com',
      phone: '+421908677578',
      image: 'https://scontent.fbts5-1.fna.fbcdn.net/v/t1.6435-9/94978179_10220069101992315_8697654300223995904_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=EEg2dGZROEMAX_HQW7T&_nc_ht=scontent.fbts5-1.fna&oh=00_AT_8tmQEe8GJml5KxYOz9skiV9h3opkR8TCk8JUoPH4lvQ&oe=62347CFF'
    }
  ];

  constructor( private dataService : DataService ) { }

  ngOnInit(): void {
  }

}
