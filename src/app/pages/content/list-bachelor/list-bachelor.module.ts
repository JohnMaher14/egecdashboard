import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBachelorRoutingModule } from './list-bachelor-routing.module';
import { ListBachelorComponent } from './list-bachelor.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    ListBachelorComponent
  ],
  imports: [
    CommonModule,
    ListBachelorRoutingModule,
    TableModule,
    InputTextModule
  ]
})
export class ListBachelorModule { }
