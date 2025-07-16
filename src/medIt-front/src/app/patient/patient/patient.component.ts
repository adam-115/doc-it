import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import type { InstanceOptions, ModalInterface, ModalOptions } from 'flowbite';
import { initFlowbite, Modal } from 'flowbite';



@Component({
  selector: 'app-patient',
  imports: [ReactiveFormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements AfterViewInit {

  @ViewChild('newPatientModal')
  newPatientModalRef!: ElementRef;
  newPatientModal: ModalInterface | null = null;

  constructor(private router:Router) {

  }


  ngAfterViewInit(): void {
    let modalOptions: ModalOptions = {
      placement: 'center',
      backdrop: 'static',

      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
        console.log('modal is hidden');
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
      id: 'modalEl22',
      override: true
    };
    let nnElement = this.newPatientModalRef.nativeElement
    this.newPatientModal = new Modal(nnElement, modalOptions, instanceOptions);
  }

  ngOnInit(): void {
    initFlowbite();

  }

  newPatient(): void {
    this.router.navigate(['/home/new-patient']);
    // if (this.newPatientModal) {
    //   this.newPatientModal.show();
    // }
  }

  closeModal(): void {
    if (this.newPatientModal) {
      this.newPatientModal.hide();
    }
  }
}
