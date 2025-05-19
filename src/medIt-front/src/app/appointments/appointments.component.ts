import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  imports: [],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {
  todayDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

}
