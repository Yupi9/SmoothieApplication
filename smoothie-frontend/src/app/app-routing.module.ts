import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { MainComponent } from './main/main.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
