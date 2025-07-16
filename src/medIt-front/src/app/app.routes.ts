import { Routes } from '@angular/router';
import { BillingComponent } from './billing/billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TestComponent } from './helper/test/test.component';
import { UiKitComponent } from './helper/ui-kit/ui-kit.component';
import { HomeComponent } from './homePage/home/home/home.component';
import { LoginComponent } from './homePage/login/login.component';
import { MedicalHistoryComponent } from './patient/medical-history/medical-history.component';
import { NewMedicalHistoryComponent } from './patient/new-medical-history/new-medical-history.component';
import { NewPatientComponent } from './patient/new-patient/new-patient.component';
import { PatientComponent } from './patient/patient/patient.component';
import { ReviewPatientComponent } from './patient/review-patient/review-patient.component';
import { StaffComponent } from './staff/staff/staff.component';
import { TaskComponent } from './task/task/task.component';
import { AdmWeekViewCalendarComponent } from './calendar/adm-week-view-calendar/adm-week-view-calendar.component';

export const APP_PPATH = "";
export const HOME_PATH = "home";
export const PATIENT_PATH = "patient";
export const PATIENT_NEW_PATH = "new-patient";
export const PATIENT_MEDICAL_HISTORY_PATH = "medical-history";
export const PATIENT_MEDICAL_HISTORY_NEW_PATH = "new-medical-history";
export const REVIEW_PATIENT_PATH = "review-patient";
export const BILLING_PATH = "billing";
export const TASK_PATH = "task";
export const STAFF_PATH = "staff";
export const UI_PATH = "ui";
export const TEST_PATH = "test";
export const CALENDAR_PATH = "calendar";



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
      path: PATIENT_PATH,
      component: PatientComponent
    },
    {
      path: PATIENT_NEW_PATH,
      component: NewPatientComponent
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
    },
    {
      path: PATIENT_MEDICAL_HISTORY_PATH,
      component: MedicalHistoryComponent
    },
    {
      path: PATIENT_MEDICAL_HISTORY_NEW_PATH,
      component: NewMedicalHistoryComponent
    },
    {
      path: REVIEW_PATIENT_PATH,
      component: ReviewPatientComponent
    },
    {
      path: CALENDAR_PATH,
      component:AdmWeekViewCalendarComponent,
    }
    ]
  },
  {
    path: UI_PATH,
    component: UiKitComponent
  },
  {
    path: TEST_PATH,
    component:AdmWeekViewCalendarComponent
    // component: TestComponent
  }
];
