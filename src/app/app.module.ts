import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HeaderComponent } from './Header/header.component';
import { LeftPanelComponent } from './leftpanel/leftpanel.component';
import { AuditReportComponent } from './Report/AuditReport/auditreport.component';
import { ExceptionReportComponent } from './Report/ExceptionReport/exceptionreport.component';
import { TimeReportComponent } from './Report/TimeReport/timereport.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { TimeEntryComponent } from './TimeEntry/timeentry.component';
import { ActivityComponent } from './Setting/Activity/activity.component';
import { RoleComponent } from './Setting/Role/role.component';
import { RoleActivityComponent } from './Setting/RoleActivity/roleactivity.component';
import { TimeZoneComponent } from './Setting/TimeZone/timezone.component';
import { UsersComponent } from './Users/users.component';
import { UserProfileComponent } from './UserProfile/userprofile.component';
import { RouteNames } from './Services/routenames.service';

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
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RouteNames],
  bootstrap: [AppComponent]
})
export class AppModule { }
