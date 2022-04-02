import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ContactsResolverService } from "../shared/resolvers/contacts-resolver.service";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactComponent } from "./contact.component";

@NgModule({
  declarations:[
    ContactComponent,
    ContactFormComponent,
    ContactCardComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent, resolve: [ContactsResolverService]}
    ])
  ]
})

export class ContactModule{}