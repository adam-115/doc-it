import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DialogNameEnum } from '../../app.types';
import { NewAllergiesComponent } from "../new-allergies/new-allergies.component";
import { NewCurrentMedicationComponent } from "../new-current-medication/new-current-medication.component";
import { NewFamilyHistoryComponent } from "../new-family-history/new-family-history.component";
import { NewImmunizationComponent } from "../new-immunization/new-immunization.component";
import { NewMedicalConditionComponent } from "../new-medical-condition/new-medical-condition.component";
import { NewVitalStatisticComponent } from "../new-vital-statistic/new-vital-statistic.component";
import { ShareDataService } from './../../service/share-data.service';
import { REVIEW_PATIENT_PATH } from '../../app.routes';

@Component({
  selector: 'app-new-medical-history',
  imports: [NewAllergiesComponent, NewCurrentMedicationComponent, NewVitalStatisticComponent, NewImmunizationComponent, NewFamilyHistoryComponent, NewMedicalConditionComponent],
  templateUrl: './new-medical-history.component.html',
  styleUrl: './new-medical-history.component.css'
})
export class NewMedicalHistoryComponent {

  constructor(private shareDataService: ShareDataService , private router: Router) {
  }

  addNewVitalStatistic(): void {
    this.shareDataService.setDilaogName(DialogNameEnum.newVitalStatistic);
  }

  addNewAllergy(): void {
    this.shareDataService.setDilaogName(DialogNameEnum.newAllergy);
  }
  addNewCurrentMedication(): void {
    this.shareDataService.setDilaogName(DialogNameEnum.newCurrentMedication);
  }
  addNewImmunization(): void {
    this.shareDataService.setDilaogName(DialogNameEnum.newImmunization);
  }
  addNewFamilyHistory(): void {
    this.shareDataService.setDilaogName(DialogNameEnum.newFamilyHistory);
  }

  addNewMedicalCondition(): void {
    this.shareDataService.setDilaogName(DialogNameEnum.newMedicalCondition);
  }

  navigateTOComplete(): void {
    this.router.navigate(['/home/'+REVIEW_PATIENT_PATH]);

  }

}
