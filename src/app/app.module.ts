import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { CountUpModule } from 'ngx-countup';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { ModalModule } from "ngx-bootstrap/modal";
import localeAr from '@angular/common/locales/ar';
import { registerLocaleData } from '@angular/common';
import { NotfoundComponent } from './pages/shared/notfound/notfound.component';

registerLocaleData(localeAr, 'ar');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    CountUpModule,
    NgChartsModule.forRoot(),
    ModalModule.forChild()
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthenticationInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
