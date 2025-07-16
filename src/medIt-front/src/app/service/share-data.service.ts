import { Injectable, signal } from '@angular/core';
import { DialogNameEnum } from '../app.types';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  dialogName = signal<DialogNameEnum>(DialogNameEnum.none);

  constructor() { }

  setDilaogName(name: DialogNameEnum): void {
    this.dialogName.set(name)
  }

  getDialogName(): DialogNameEnum {
    return this.dialogName()
  }

}
