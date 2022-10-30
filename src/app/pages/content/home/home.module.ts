import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgChartsModule } from "ng2-charts";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDropdownModule  } from "ngx-bootstrap/dropdown";
@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgChartsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class HomeModule { }
