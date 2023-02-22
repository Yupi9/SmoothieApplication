import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { SmothieComponent } from './business-owner/smothie/smothie.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { SmothieEditDialogComponent } from './business-owner/smothie/smothie-edit-dialog/smothie-edit-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { OrderDialogComponent } from './user/order-dialog/order-dialog.component';
import { SuccessfulOrderComponent } from './user/successful-order/successful-order.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BusinessOwnerComponent,
    SmothieComponent,
    SmothieEditDialogComponent,
    UserComponent,
    OrderDialogComponent,
    SuccessfulOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
