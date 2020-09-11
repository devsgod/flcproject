import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { FollowupComponent } from './pages/followup/followup.component';
import { CreateissueComponent } from './pages/createissue/createissue.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    PaymentsComponent,
    FollowupComponent,
    CreateissueComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
