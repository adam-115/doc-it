import { AfterViewInit, Component, effect, ElementRef, ViewChild } from '@angular/core';
import { DialogNameEnum } from '../../app.types';
import { ShareDataService } from '../../service/share-data.service';
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from 'flowbite';

@Component({
  selector: 'app-new-immunization',
  imports: [],
  templateUrl: './new-immunization.component.html',
  styleUrl: './new-immunization.component.css'
})
export class NewImmunizationComponent implements AfterViewInit {

  @ViewChild('newImmunization')
  newImmunization!: ElementRef;
  modalElement!: ModalInterface;

  constructor(private shareDataService: ShareDataService) {
    effect(() => {
      this.showDialog();
    });
  }

  ngAfterViewInit(): void {
     const modalOptions: ModalOptions = {
      placement: 'top-center',
      backdrop: 'dynamic',
      backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
        this.shareDataService.setDilaogName(DialogNameEnum.none);
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
    this.modalElement = new Modal(this.newImmunization.nativeElement, modalOptions, instanceOptions);

  }

  showDialog(): void {
    if (this.shareDataService.getDialogName() === DialogNameEnum.newImmunization) {
      this.modalElement.show();
    }
  }

    closeModal(): void {
    this.modalElement.hide();
  }



}
