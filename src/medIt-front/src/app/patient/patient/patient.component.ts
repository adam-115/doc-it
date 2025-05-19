import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-patient',
  imports: [ReactiveFormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  patientForm: FormGroup=new FormGroup({});
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  genders = ['Male', 'Female', 'Other', 'Prefer not to say'];

  constructor(private fb: FormBuilder) {

    this.patientForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        cin: ['', [Validators.required]],
      }),
      contactInfo: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      medicalInfo: this.fb.group({
        bloodType: [''],
        allergies: [''],
        medications: [''],
        conditions: [''],
        insuranceProvider: [''],
        insuranceId: [''],
      }),
      emergencyContact: this.fb.group({
        name: ['', Validators.required],
        relationship: ['', Validators.required],
        phone: ['', Validators.required],
      })
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('Form submitted:', this.patientForm.value);
      // Add your form submission logic here
    } else {
      this.patientForm.markAllAsTouched();
    }
  }

}
