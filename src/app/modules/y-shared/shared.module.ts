import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GridComponent } from './components/grid/grid.component';
import { MaterialModule } from './material.module';
import { ActionButtonsComponent } from './components/grid/action-buttons/action-buttons.component';
import { InputComponent } from './components/input/input.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent,
    GridComponent,
    ActionButtonsComponent,
    InputComponent,
    FieldErrorsComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [ReactiveFormsModule, MaterialModule, SpinnerComponent, CardComponent, GridComponent, InputComponent],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class SharedModule {}
