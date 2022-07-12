import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  public hasError(form: FormGroup, path: string) {
    const ctrl = form.get(path);
    return ctrl && ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }
  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }
  public getError(form: FormGroup, path: string): any {
    const ctrl = form.get(path);
    return ctrl && ctrl.invalid && (ctrl.touched || ctrl.dirty)
      ? ctrl?.errors
      : null;
  }
}
