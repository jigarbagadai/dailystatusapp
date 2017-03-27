import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { BusyModule } from 'angular2-busy';
import { ColumnComponent, DataTableComponent } from './Controls/index';

import {
  LoginComponent, DashboardComponent, AuditReportComponent, ExceptionReportComponent, TimeReportComponent,
  TimeEntryComponent, ActivityComponent, RoleComponent, RoleActivityComponent, TimeZoneComponent,
  UsersComponent, UserProfileComponent, AppComponent, HeaderComponent, LeftPanelComponent
} from './index';

import { RouteNames, AuthGuard, AuthenticationService,RoleService } from './Services/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LeftPanelComponent,
    DashboardComponent,
    AuditReportComponent,
    ExceptionReportComponent,
    TimeReportComponent,
    TimeEntryComponent,
    ActivityComponent,
    RoleComponent,
    RoleActivityComponent,
    TimeZoneComponent,
    UsersComponent,
    UserProfileComponent,
    ColumnComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BusyModule
  ],
  providers: [RouteNames, AuthGuard, AuthenticationService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
