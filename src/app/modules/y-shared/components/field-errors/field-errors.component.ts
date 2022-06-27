import { Component, Input } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class controlErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {

  @Input()
  public formField!: UntypedFormControl;

  @Input()
  public fieldName!: string;

  @Input()
  public label!: string;

  matcher = new controlErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

  hasError(){
    return this.formField.hasError(this.fieldName) && !this.formField.hasError('required');
  }

  hasRequire(){
    return this.formField.hasError('required');
  }

}
