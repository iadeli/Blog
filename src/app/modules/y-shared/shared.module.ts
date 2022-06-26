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
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent,
    GridComponent,
    ActionButtonsComponent,
    InputComponent,
    FieldErrorsComponent,
    TextareaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    SpinnerComponent,
    CardComponent,
    GridComponent,
    InputComponent,
    TextareaComponent,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class SharedModule {}
