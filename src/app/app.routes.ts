import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { AuditReportComponent } from './Report/AuditReport/auditreport.component';
import { ExceptionReportComponent } from './Report/ExceptionReport/exceptionreport.component';
import { TimeReportComponent } from './Report/TimeReport/timereport.component';
import { TimeEntryComponent } from './TimeEntry/timeentry.component';
import { ActivityComponent } from './Setting/Activity/activity.component';
import { RoleComponent } from './Setting/Role/role.component';
import { RoleActivityComponent } from './Setting/RoleActivity/roleactivity.component';
import { TimeZoneComponent } from './Setting/TimeZone/timezone.component';
import { UsersComponent } from './Users/users.component';
import { UserProfileComponent } from './UserProfile/userprofile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'timeentry', component: TimeEntryComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'report/audit', component: AuditReportComponent },
  { path: 'report/exception', component: ExceptionReportComponent },
  { path: 'report/time', component: TimeReportComponent },
  { path: 'setting/role', component: RoleComponent },
  { path: 'setting/activity', component: ActivityComponent },
  { path: 'setting/roleactivity', component: RoleActivityComponent },
  { path: 'setting/timezone', component: TimeZoneComponent },
]

export const routing = RouterModule.forRoot(routes);