import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, UntypedFormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {

  @Input()
  parentForm: UntypedFormGroup | undefined;

  @Input()
  fieldName!: string;

  @Input()
  label!: string;

  @Input()
  placeholder!: string;

  public value!: string;
  public changed!: (value: string) => void;
  public touched!: () => void;
  public isDisabled!: boolean;

  get formField(): UntypedFormControl {
    return this.parentForm?.get(this.fieldName) as UntypedFormControl;
  }

  constructor() {}
  
  public writeValue(obj: any): void {
    this.value = obj;
  }

  public onChange(event: Event){
    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);
  }
  
  public registerOnChange(fn: any): void {
    this.changed = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
