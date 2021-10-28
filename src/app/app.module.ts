import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositFundsComponent } from './deposit-funds/deposit-funds.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { OpenAccountComponent } from './open-account/open-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepositFundsComponent,
    ManageAccountComponent,
    OpenAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
