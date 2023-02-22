import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { MainComponent } from './main/main.component';
import { SuccessfulOrderComponent } from './user/successful-order/successful-order.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'owner',
    component: BusinessOwnerComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/order/:id',
    component: SuccessfulOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
