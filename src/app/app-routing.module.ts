import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m=>m.PeopleModule)
  },
  {
    path: 'starship',
    loadChildren: () => import('./starship/starship.module').then(m=>m.StarshipModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
