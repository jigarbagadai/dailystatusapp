import { Routes, RouterModule } from '@angular/router';
import { LoginComponent,DashboardComponent,AuditReportComponent,ExceptionReportComponent,TimeReportComponent,
         TimeEntryComponent,ActivityComponent,RoleComponent,RoleActivityComponent,TimeZoneComponent,
         UsersComponent,UserProfileComponent
       } from './index';
import { AuthGuard } from './Services/index';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'timeentry', component: TimeEntryComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'report/audit', component: AuditReportComponent, canActivate: [AuthGuard] },
  { path: 'report/exception', component: ExceptionReportComponent, canActivate: [AuthGuard] },
  { path: 'report/time', component: TimeReportComponent, canActivate: [AuthGuard] },
  { path: 'setting/role', component: RoleComponent, canActivate: [AuthGuard] },
  { path: 'setting/activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'setting/roleactivity', component: RoleActivityComponent, canActivate: [AuthGuard] },
  { path: 'setting/timezone', component: TimeZoneComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(routes);