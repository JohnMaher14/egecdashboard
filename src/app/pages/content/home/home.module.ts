import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgChartsModule } from "ng2-charts";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { arLocale } from "ngx-bootstrap/locale";
import { defineLocale } from "ngx-bootstrap/chronos";
defineLocale('ar', arLocale)
import { BsDropdownModule  } from "ngx-bootstrap/dropdown";
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgChartsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CKEditorModule
  ]
})
export class HomeModule { }
