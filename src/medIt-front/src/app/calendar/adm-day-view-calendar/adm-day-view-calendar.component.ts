
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InstanceOptions, Modal, ModalInterface, ModalOptions } from 'flowbite';
import { AdmCalendarService, Appointment, TimePeriod } from '../../service/adm-calendar.service';


@Component({
  selector: 'app-adm-day-view-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './adm-day-view-calendar.component.html',
  styleUrl: './adm-day-view-calendar.component.css'
})
export class AdmDayViewCalendarComponent implements OnInit, AfterViewInit, OnChanges {

  // date of day of appointment
  @Input('dayDate')
  dayDate = new Date();

  selectedColor: string = '#58a6f9';
  hourStart: string = "";
  minuteStart: string = "";
  hourEnd: string = "";
  minuteEnd: string = "";

  //dialog to show for add appointment
  @ViewChild('newAppointment')
  $NewAppointment!: ElementRef;
  modalElement!: ModalInterface;
  //time slot used for tyhe appointmenet each row of the calendar represent one time slot
  // its defined in adm-calendar.service.ts
  timesPeriods: TimePeriod[] = [];
  // list of and appointement must be defined in the adm-calendar.service.ts
  appointments: Appointment[] = [];
  currentDayAppointment: Appointment[] = [];


  constructor(private admCalendarService: AdmCalendarService) {
    this.timesPeriods = admCalendarService.timesPeriods;
  }

  // use in change to dectect the change of dayDate
  // and update the currentDayAppointment
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dayDate']) {
      // load appointments for the current day
      this.currentDayAppointment = this.admCalendarService.getcurrentDayAppointment(this.dayDate);
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // init the propup dialog for adding new appointement
    const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
        console.log('dialog is hided');
      },
      onShow: () => {
        console.log('modal is shown');
      },
      onToggle: () => {
        console.log('modal has been toggled');
      },
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
      id: 'modalEl',
      override: true
    };
    this.modalElement = new Modal(this.$NewAppointment.nativeElement, modalOptions, instanceOptions);
  }




  // addAppointement(): void {
  //   let newAppointement: Appointment = {
  //     timePeriod: this.findHourslote(),
  //     creationDate: new Date(),
  //     date: this.dayDate,
  //     color: this.selectedColor,
  //   };
  //   // now how many appointement in the same start date to keep te order of insertoion
  //   let numberOfAppointementStartAtTheSameDate = this.appointments.filter(app => {
  //     return app.timePeriod.rowStart == newAppointement.timePeriod.rowStart;
  //   }).length;
  //   newAppointement = {
  //     timePeriod: newAppointement.timePeriod,
  //     creationDate: newAppointement.creationDate,
  //     date: newAppointement.date,
  //     position: numberOfAppointementStartAtTheSameDate + 1,
  //     color: newAppointement.color,
  //     title: newAppointement.title
  //   }
  //   this.appointments.push(newAppointement);
  //   this.currentDayAppointment = this.getcurrentDayAppointment();
  //   this.hideModal();
  // }


  addAppointement(): void {
    let newAppointement: Appointment = {
      timePeriod: this.findHourslote(),
      creationDate: new Date(),
      date: this.dayDate,
      color: this.selectedColor,
      title: "New Appointment",
    };

    this.appointments.push(newAppointement);
    this.admCalendarService.addAppointment(newAppointement);

    // refresh the current day appointments
    this.currentDayAppointment = this.admCalendarService.getcurrentDayAppointment(this.dayDate);
    this.hideModal();
  }

  calculateWidth(item: Appointment): string {
    let numberOfAppointementStartFromTheSlote = this.appointments.filter(appt => {
      return appt.timePeriod.rowStart == item.timePeriod.rowStart;
    }).length;
    return "width:" + (90 / numberOfAppointementStartFromTheSlote).toString() + "%";
  }

  // calculateMarginLeft(item: Appointment): string {
  //   let numberOfAppointementStartFromTheSlote = this.currentDayAppointment.filter(appt => {
  //     return appt.timePeriod.rowStart == item.timePeriod.rowStart;
  //   }).length;

  //   //TODO filter by date creation
  //   const sortedTable = this.currentDayAppointment.filter(appt => {
  //     return appt.timePeriod.rowStart == item.timePeriod.rowStart;
  //   }).sort((a, b) => {
  //     // Handle cases where position might be undefined
  //     if (a.position === undefined && b.position === undefined) return 0;
  //     if (a.position === undefined) return 1; // push a to end
  //     if (b.position === undefined) return -1; // push b to end
  //     return a.position - b.position;
  //   });

  //   const indexOfElement = sortedTable.findIndex(pp => {
  //     return pp.position === item.position
  //   });
  //   const marginLeft = (indexOfElement * (90 / numberOfAppointementStartFromTheSlote)) + "%";
  //   return "margin-left:" + marginLeft;
  // }

  calculateMarginLeft(item: Appointment): string {
    let numberOfAppointementStartFromTheSlote = this.currentDayAppointment.filter(appt => {
      return appt.timePeriod.rowStart == item.timePeriod.rowStart;
    }).length;

    const sortedTable = this.currentDayAppointment.filter(appt => {
      return appt.timePeriod.rowStart == item.timePeriod.rowStart;
    }).sort((a, b) => {
      return a.creationDate.getTime() - b.creationDate.getTime();
    });

    const indexOfElement = sortedTable.findIndex(pp => {
      return pp.creationDate.getTime() === item.creationDate.getTime();
    });
    const marginLeft = (indexOfElement * (90 / numberOfAppointementStartFromTheSlote)) + "%";
    return "margin-left:" + marginLeft;
  }

  mouseHoverZindexChange(event: MouseEvent, item: Appointment) {
    const element: HTMLDivElement = event.target as HTMLDivElement;
    // element.style.zIndex = "10";
    element.style.opacity = "100%";
    item.zIndex = 10;
  }

  mouseLeaveZindexChange(event: MouseEvent, item: Appointment) {
    console.log("mouseLeaveZindexChange");
    const element: HTMLDivElement = event.target as HTMLDivElement;
    // element.style.zIndex = "0";
    element.style.opacity = "80%";
    item.zIndex = 0;
  }

  addNewAppointment(item: TimePeriod) {
    if (this.isAddAllowed(item) == true) {
      this.hourStart = item.timeStart.substring(0, 2);
      this.minuteStart = item.timeStart.substring(3, 5);
      this.hourEnd = item.timeEnd.substring(0, 2);
      this.minuteEnd = item.timeEnd.substring(3, 5);
      this.modalElement.show();
    }
    else {
      alert("You can not add appointment in the past");
    }

  }

  hideModal() {
    if (this.modalElement) {
      this.modalElement.hide();
    }
  }


  private findHourslote(): TimePeriod {
    let timeStartAsString = this.hourStart + ":" + this.minuteStart;
    let timePeriodStart = this.timesPeriods.find(tp => {
      return timeStartAsString == tp.timeStart;
    });

    let timeEndAsString = this.hourEnd + ":" + this.minuteEnd;
    let timePeriodEnd = this.timesPeriods.find(tp => {
      return timeEndAsString == tp.timeEnd;
    });

    return {
      rowStart: timePeriodStart == undefined ? 0 : timePeriodStart.rowStart,
      rowEnd: timePeriodEnd == undefined ? 0 : timePeriodEnd.rowEnd,
      timeStart: timeStartAsString,
      timeEnd: timeEndAsString
    };
  }

  // private getcurrentDayAppointment(): Appointment[] {
  //   // alert("getcurrentDayAppointment");
  //   this.currentDayAppointment = this.appointments.filter(app => {
  //     let value = app.date.getFullYear() == this.dayDate.getFullYear() &&
  //       app.date.getMonth() == this.dayDate.getMonth() &&
  //       app.date.getDate() == this.dayDate.getDate();
  //     return value;
  //   });
  //   return this.currentDayAppointment;
  // }

  displayAppointmentInTop(item: TimePeriod) {
    console.log("start displayAppointmentInTop");
    this.currentDayAppointment.forEach(app => {
      if (app.timePeriod.rowStart == item.rowStart) {
        app.zIndex = 10;
        console.log("app.zindex", app.zIndex);
      } else {
        app.zIndex = 0;
      }
    })

    console.log(this.currentDayAppointment);

  }

  isAddAllowed(item: TimePeriod): boolean {
    // Logic to determine if adding an appointment is allowed
    // For example, you can check if the current date is today or in the future
    let normaliseDayDate = new Date(this.dayDate.getFullYear(), this.dayDate.getMonth(), this.dayDate.getDate());
    let normaliseCurrentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    return normaliseDayDate >= normaliseCurrentDate ;
  }


  // onResized(event: ResizedEvent,item:RowSlote): void {
  //   // alert("on resized event " + event.newRect.width + "  " + event.newRect.height);
  //   if(this.resizeFlag ==true){
  //     item.rowEnd= item.rowEnd +1 ;
  //   }

  //   // this.width = Math.round(event.newRect.width);
  //   // this.height = Math.round(event.newRect.height);
  // }

}
