import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './pages/payments/payments.component';
import { FollowupComponent } from './pages/followup/followup.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CreateissueComponent } from './pages/createissue/createissue.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    'path':'payments',
    'component': PaymentsComponent
  },
  {
    'path':'followup',
    'component': FollowupComponent
  },
  {
    'path':'collection',
    'component': CollectionComponent
  },
  {
    'path':'createissue',
    'component': CreateissueComponent
  },
  {
    'path':'login',
    'component': LoginComponent
  },
  {
    'path':'register',
    'component': RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
