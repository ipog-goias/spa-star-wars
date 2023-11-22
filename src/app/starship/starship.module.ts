import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';


@NgModule({
  declarations: [
    StarshipListComponent,
    StarshipDetailComponent
  ],
  imports: [
    CommonModule,
    StarshipRoutingModule
  ]
})
export class StarshipModule { }
