import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './feature/home/home.component';
import {DonsComponent} from './lazy-features/dons/dons.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dons', component: DonsComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
