

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addWeeks, eachDayOfInterval, endOfWeek, format, startOfWeek } from 'date-fns';
import { AdmDayViewCalendarComponent } from "../adm-day-view-calendar/adm-day-view-calendar.component";
import { AdmCalendarService, TimePeriod } from '../../service/adm-calendar.service';


export interface AppDay {
  dayName: string,
  date: string,
  dateObj: Date,
}


@Component({
  selector: 'app-adm-week-view-calendar',
  imports: [CommonModule, AdmDayViewCalendarComponent],
  templateUrl: './adm-week-view-calendar.component.html',
  styleUrl: './adm-week-view-calendar.component.css'
})
export class AdmWeekViewCalendarComponent {
  todayDate = new Date();
  weekDays: AppDay[] = [];
  private currentDate: Date = new Date();
  timesPeriod:TimePeriod[] = [];

  constructor(private admCalendarService:AdmCalendarService) {
    this.weekDays = this.getCurrentWeek();
    this.timesPeriod = this.admCalendarService.timesPeriods;
  }
  ngOnInit(): void {
    // this.weekDays = this.getCurrentWeek();
  }

  // Get current week days with dates
  public getCurrentWeek(): AppDay[] {
    const weekStart = startOfWeek(this.currentDate, { weekStartsOn: 1 }); // Monday
    const weekEnd = endOfWeek(this.currentDate, { weekStartsOn: 1 }); // Sunday

    const days = eachDayOfInterval({
      start: weekStart,
      end: weekEnd
    });

    return days.map(day => ({
      dayName: format(day, 'EEEE'), // Full day name
      date: format(day, 'yyyy-MM-dd'), // Date in YYYY-MM-DD format
      dateObj: day // Original Date object
    }));
  }

  // Navigate to previous week
  public previousWeek(): void {
    this.currentDate = addWeeks(this.currentDate, -1);
    this.weekDays = this.getCurrentWeek();
  }

  // Navigate to next week
  public nextWeek(): void {
    this.currentDate = addWeeks(this.currentDate, 1);
    this.weekDays = this.getCurrentWeek();
  }

  // Reset to current week
  public resetToCurrentWeek(): void {
    this.currentDate = new Date();
    this.weekDays = this.getCurrentWeek();
  }

  moveToTodayDate(): void {
    this.currentDate = new Date();
    this.weekDays = this.getCurrentWeek();
  }

}
