import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngb-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPopComponent } from './dashboard/dashboard-pop/dashboard-pop.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardPopComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
