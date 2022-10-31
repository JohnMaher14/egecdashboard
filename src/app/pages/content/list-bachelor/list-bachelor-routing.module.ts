import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBachelorComponent } from './list-bachelor.component';

const routes: Routes = [{ path: '', component: ListBachelorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListBachelorRoutingModule { }
