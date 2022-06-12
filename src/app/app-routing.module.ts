import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAssessmentReportComponent } from './user-assessment-report/user-assessment-report.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ExpenseGuard } from './expense.guard';


const routes: Routes = [
  { path: 'POST/api/login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'GET/api/userassessments', component: UserAssessmentReportComponent },
  { path: 'GET/api/userassessment/graph/:id', component: UserAssessmentReportComponent },
  { path: 'GET/api/users', component: AdminSectionComponent },
  { path: 'user', component: UserComponent, canActivate: [ExpenseGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [ExpenseGuard] },
  { path: 'navigation_menu', component: NavigationMenuComponent  },
  { path: 'admin', component: ExpenseGuard, canActivate: [ExpenseGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
