import { Injectable } from "@angular/core";
import { Contact } from "../shared/contact.model";

@Injectable({
  providedIn: 'root'
})

export class ContactService{
  private contact : Contact[] = [
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
    },
    {
      position: 'Trener U12',
      name: 'Maros Hric',
      email: 'maros.hric@email.com',
      phone: '+421908677578',
      image: 'https://scontent.fbts5-1.fna.fbcdn.net/v/t1.6435-9/94616203_3214755738555114_6503174862373126144_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TJoQad-SUUkAX8ZfkHD&_nc_ht=scontent.fbts5-1.fna&oh=00_AT_UVstkz0FLwT90-MFom3FnqxcNfUYkN_XDm0xHB0p3Qg&oe=62357969'
    },
    {
      position: 'Trener U12',
      name: 'Maros Hric',
      email: 'maros.hric@email.com',
      phone: '+421908677578',
      image: 'https://scontent.fbts5-1.fna.fbcdn.net/v/t1.6435-9/95146071_3956283931108442_1532455154530385920_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=6TRxtI7QcX4AX-uqvQP&_nc_ht=scontent.fbts5-1.fna&oh=00_AT-3iglabnAxWBf7dXn_gwtVSxBAh3JE9Z9oAvn4J_sKmw&oe=6233846A'
    }
  ]

  getContacts(){
    return this.contact.slice();
  }

  getFooterContact() : Contact[]{
    const contactFooter : Contact[] = [];
    this.contact.forEach( contact => {
      if( contact.name === 'Branislav Stefan' || contact.name === 'Anton Ajben'){
        contactFooter.push(contact);
      }
    })

    return contactFooter;  
  }
}