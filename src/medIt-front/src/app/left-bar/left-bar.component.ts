import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATIENT_PATH } from '../app.routes';

@Component({
  selector: 'app-left-bar',
  imports: [],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  constructor(private router: Router, private route: ActivatedRoute) { };

  patientPage() {
    this.router.navigate([this.router.url + '/' + PATIENT_PATH]);
  }

}
