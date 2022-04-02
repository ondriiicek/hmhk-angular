import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MatchesRoutingModule } from "./matches-routing.module";
import { MatchesComponent } from "./matches.component";
import { TableBodyComponent } from "./table-body/table-body.component";
import { TableButtonsComponent } from "./table-buttons/table-buttons.component";
import { TableHeadComponent } from "./table-head/table-head.component";

@NgModule({
  declarations:[
    MatchesComponent,
    TableHeadComponent,
    TableButtonsComponent,
    TableBodyComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    MatchesRoutingModule
  ]
})

export class MatchesModule{}