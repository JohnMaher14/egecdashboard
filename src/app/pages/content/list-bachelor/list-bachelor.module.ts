import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBachelorRoutingModule } from './list-bachelor-routing.module';
import { ListBachelorComponent } from './list-bachelor.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ListBachelorComponent
  ],
  imports: [
    CommonModule,
    ListBachelorRoutingModule,
    TableModule
  ]
})
export class ListBachelorModule { }
