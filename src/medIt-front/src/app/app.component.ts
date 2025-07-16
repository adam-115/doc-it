import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { AdmWeekViewCalendarComponent } from "./calendar/adm-week-view-calendar/adm-week-view-calendar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdmWeekViewCalendarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'medIt-front';
  test = environment.apiUrl


  ngOnInit(): void {
    // initFlowbite();
  }
  ngAfterViewInit(): void {
    initFlowbite();
  }
}
