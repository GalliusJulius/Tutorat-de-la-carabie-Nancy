import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NetworksComponent} from '../../utils/networks/networks.component';
import { RouterModule } from '@angular/router';

const ROUTES = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    NetworksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule {}
