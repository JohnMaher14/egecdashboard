import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/shared/notfound/notfound.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [
  { path:'' , redirectTo:'admin/home' , pathMatch: 'full' },
  { path: 'admin/home' , canActivate:[ AuthenticationGuard]  ,loadChildren: () => import('./pages/content/home/home.module').then(m => m.HomeModule) },
  { path: 'admin/login',  loadChildren: () => import('./pages/content/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'admin/listBachelor', canActivate:[ AuthenticationGuard] , loadChildren: () => import('./pages/content/list-bachelor/list-bachelor.module').then(m => m.ListBachelorModule) },
  { path: 'admin/profile', canActivate:[ AuthenticationGuard] , loadChildren: () => import('./pages/content/auth/profile/profile.module').then(m => m.ProfileModule) },
  {path: '**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
