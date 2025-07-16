import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-patient',
  imports: [],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent {
  constructor(private router: Router) {
  }

  navigateToNewMedicalHistory(): void {
    this.router.navigate(['/home/new-medical-history']);
  }

}
