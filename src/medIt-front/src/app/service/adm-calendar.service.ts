import { Injectable } from '@angular/core';


export interface TimePeriod {
  rowStart: number;
  rowEnd: number;
  timeStart: string;
  timeEnd: string;
}


export interface Appointment {
  timePeriod: TimePeriod;
  creationDate: Date,
  date: Date,
  color?: string,
  title?: string,
  zIndex?: number,
}

@Injectable({
  providedIn: 'root'
})
export class AdmCalendarService {
  readonly timesPeriods: TimePeriod[] = [
    {
      rowStart: 1,
      rowEnd: 2,
      timeStart: "07:00",
      timeEnd: "07:15",
    },
    {
      rowStart: 2,
      rowEnd: 3,
      timeStart: "07:15",
      timeEnd: "07:30",
    },
    {
      rowStart: 3,
      rowEnd: 4,
      timeStart: "07:30",
      timeEnd: "07:45",
    },
    {
      rowStart: 4,
      rowEnd: 5,
      timeStart: "07:45",
      timeEnd: "08:00",
    },
    {
      rowStart: 5,
      rowEnd: 6,
      timeStart: "08:00",
      timeEnd: "08:15",
    },
    {
      rowStart: 6,
      rowEnd: 7,
      timeStart: "08:15",
      timeEnd: "08:30",
    },
    {
      rowStart: 7,
      rowEnd: 8,
      timeStart: "08:30",
      timeEnd: "08:45",
    },
    {
      rowStart: 8,
      rowEnd: 9,
      timeStart: "08:45",
      timeEnd: "09:00",
    },
    {
      rowStart: 9,
      rowEnd: 10,
      timeStart: "09:00",
      timeEnd: "09:15",
    },
    {
      rowStart: 10,
      rowEnd: 11,
      timeStart: "09:15",
      timeEnd: "09:30"
    },
    {
      rowStart: 11,
      rowEnd: 12,
      timeStart: "09:30",
      timeEnd: "09:45"
    },
    {
      rowStart: 12,
      rowEnd: 13,
      timeStart: "09:45",
      timeEnd: "10:00"
    },
    {
      rowStart: 13,
      rowEnd: 14,
      timeStart: "10:00",
      timeEnd: "10:15"
    },
    {
      rowStart: 14,
      rowEnd: 15,
      timeStart: "10:15",
      timeEnd: "10:30"
    },
    {
      rowStart: 15,
      rowEnd: 16,
      timeStart: "10:30",
      timeEnd: "10:45"
    },
    {
      rowStart: 16,
      rowEnd: 17,
      timeStart: "10:45",
      timeEnd: "11:00"
    },
    {
      rowStart: 17,
      rowEnd: 18,
      timeStart: "11:00",
      timeEnd: "11:15"
    },
    {
      rowStart: 18,
      rowEnd: 19,
      timeStart: "11:15",
      timeEnd: "11:30"
    },
    {
      rowStart: 19,
      rowEnd: 20,
      timeStart: "11:30",
      timeEnd: "11:45"
    },
    {
      rowStart: 20,
      rowEnd: 21,
      timeStart: "11:45",
      timeEnd: "12:00"
    },
    {
      rowStart: 21,
      rowEnd: 22,
      timeStart: "12:00",
      timeEnd: "12:15"
    },
    {
      rowStart: 22,
      rowEnd: 23,
      timeStart: "12:15",
      timeEnd: "12:30"
    },
    {
      rowStart: 23,
      rowEnd: 24,
      timeStart: "12:30",
      timeEnd: "12:45"
    },
    {
      rowStart: 24,
      rowEnd: 25,
      timeStart: "12:45",
      timeEnd: "13:00"
    },
    {
      rowStart: 25,
      rowEnd: 26,
      timeStart: "13:00",
      timeEnd: "13:15"
    },
    {
      rowStart: 26,
      rowEnd: 27,
      timeStart: "13:15",
      timeEnd: "13:30"
    },
    {
      rowStart: 27,
      rowEnd: 28,
      timeStart: "13:30",
      timeEnd: "13:45"
    },
    {
      rowStart: 28,
      rowEnd: 29,
      timeStart: "13:45",
      timeEnd: "14:00"
    },
    {
      rowStart: 29,
      rowEnd: 30,
      timeStart: "14:00",
      timeEnd: "14:15"
    },
    {
      rowStart: 30,
      rowEnd: 31,
      timeStart: "14:15",
      timeEnd: "14:30"
    },
    {
      rowStart: 31,
      rowEnd: 32,
      timeStart: "14:30",
      timeEnd: "14:45"
    },
    {
      rowStart: 32,
      rowEnd: 33,
      timeStart: "14:45",
      timeEnd: "15:00"
    },
    {
      rowStart: 33,
      rowEnd: 34,
      timeStart: "15:00",
      timeEnd: "15:15"
    },
    {
      rowStart: 34,
      rowEnd: 35,
      timeStart: "15:15",
      timeEnd: "15:30"
    },
    {
      rowStart: 35,
      rowEnd: 36,
      timeStart: "15:30",
      timeEnd: "15:45"
    },
    {
      rowStart: 36,
      rowEnd: 37,
      timeStart: "15:45",
      timeEnd: "16:00"
    },
    {
      rowStart: 37,
      rowEnd: 38,
      timeStart: "16:00",
      timeEnd: "16:15"
    },
    {
      rowStart: 38,
      rowEnd: 39,
      timeStart: "16:15",
      timeEnd: "16:30"
    },
    {
      rowStart: 39,
      rowEnd: 40,
      timeStart: "16:30",
      timeEnd: "16:45"
    },
    {
      rowStart: 40,
      rowEnd: 41,
      timeStart: "16:45",
      timeEnd: "17:00"
    },
    {
      rowStart: 41,
      rowEnd: 42,
      timeStart: "17:00",
      timeEnd: "17:15"
    },
    {
      rowStart: 42,
      rowEnd: 43,
      timeStart: "17:15",
      timeEnd: "17:30"
    },
    {
      rowStart: 43,
      rowEnd: 44,
      timeStart: "17:30",
      timeEnd: "17:45"
    },
    {
      rowStart: 44,
      rowEnd: 45,
      timeStart: "17:45",
      timeEnd: "18:00"
    },

    {
      rowStart: 45,
      rowEnd: 46,
      timeStart: "18:00",
      timeEnd: "18:15"
    },
    {
      rowStart: 46,
      rowEnd: 47,
      timeStart: "18:15",
      timeEnd: "18:30"
    },
    {
      rowStart: 47,
      rowEnd: 48,
      timeStart: "18:30",
      timeEnd: "18:45"
    },
    {
      rowStart: 48,
      rowEnd: 49,
      timeStart: "18:45",
      timeEnd: "19:00"
    },
    {
      rowStart: 49,
      rowEnd: 50,
      timeStart: "19:00",
      timeEnd: "19:15"
    },
    {
      rowStart: 50,
      rowEnd: 51,
      timeStart: "19:15",
      timeEnd: "19:30"
    },
    {
      rowStart: 51,
      rowEnd: 52,
      timeStart: "19:30",
      timeEnd: "19:45"
    },
    {
      rowStart: 52,
      rowEnd: 53,
      timeStart: "19:45",
      timeEnd: "20:00"
    },
    {
      rowStart: 53,
      rowEnd: 54,
      timeStart: "20:00",
      timeEnd: "20:15"
    },
    {
      rowStart: 54,
      rowEnd: 55,
      timeStart: "20:15",
      timeEnd: "20:30"
    },
    {
      rowStart: 55,
      rowEnd: 56,
      timeStart: "20:30",
      timeEnd: "20:45"
    },
    {
      rowStart: 56,
      rowEnd: 57,
      timeStart: "20:45",
      timeEnd: "21:00"
    },
    {
      rowStart: 57,
      rowEnd: 58,
      timeStart: "21:00",
      timeEnd: "21:15"
    },
    {
      rowStart: 58,
      rowEnd: 59,
      timeStart: "21:15",
      timeEnd: "21:30"
    },
    {
      rowStart: 59,
      rowEnd: 60,
      timeStart: "21:30",
      timeEnd: "21:45"
    },
    {
      rowStart: 60,
      rowEnd: 61,
      timeStart: "21:45",
      timeEnd: "22:00"
    }
  ];

  appointments: Appointment[] = [];
  constructor() { }

  addAppointment(item: Appointment): void {
    // Add the new appointment to the appointments array
    //TODO check after if its allowed to add appoiontement in previous date
    // TODO update it to link it into db to insert new Appointemennt
    this.appointments.push(item);
  }

  getcurrentDayAppointment(dayDate: Date): Appointment[] {
    // TODO after lod load data from db
    return this.appointments.filter(app => {
      let value = app.date.getFullYear() == dayDate.getFullYear() &&
        app.date.getMonth() == dayDate.getMonth() &&
        app.date.getDate() == dayDate.getDate();
      return value;
    });

  }

}
