import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PeopleDetailComponent,
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    HttpClientModule
  ]
})
export class PeopleModule { }
