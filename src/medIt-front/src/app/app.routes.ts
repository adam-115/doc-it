import { Routes } from '@angular/router';
import { BillingComponent } from './billing/billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TestComponent } from './helper/test/test.component';
import { UiKitComponent } from './helper/ui-kit/ui-kit.component';
import { HomeComponent } from './homePage/home/home/home.component';
import { LoginComponent } from './homePage/login/login.component';
import { PatientComponent } from './patient/patient/patient.component';
import { StaffComponent } from './staff/staff/staff.component';
import { TaskComponent } from './task/task/task.component';

export const APP_PPATH = "";
export const HOME_PATH = "home";
export const BILLING_PATH = "billing";
export const TASK_PATH = "task";
export const STAFF_PATH = "staff";
export const UI_PATH = "ui";
export const TEST_PATH = "test";
export const NEW_PATIENT = "new-patient";


export const routes: Routes = [
  {
    path: APP_PPATH,
    component: LoginComponent,
  },
  {
    path: HOME_PATH,
    component: HomeComponent,
    children: [{
      path: "",
      component: DashboardComponent,
    },
    {
      path: NEW_PATIENT,
      component: PatientComponent
    },
    {
      path: BILLING_PATH,
      component: BillingComponent
    },
    {
      path: TASK_PATH,
      component: TaskComponent
    },
    {
      path: STAFF_PATH,
      component: StaffComponent
    }
    ]
  },
  {
    path: UI_PATH,
    component: UiKitComponent
  },
  {
    path: TEST_PATH,
    component: TestComponent
  }
];
