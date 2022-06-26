import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {

  @Input()
  parentForm: FormGroup | undefined;

  @Input()
  fieldName!: string;

  @Input()
  label!: string;

  @Input()
  placeholder!: string;

  @Input() rows: number = 5;

  public value!: string;
  public changed!: (value: string) => void;
  public touched!: () => void;
  public isDisabled!: boolean;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
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
