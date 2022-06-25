import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GridComponent } from './components/grid/grid.component';
import { MaterialModule } from './material.module';
import { ActionButtonsComponent } from './components/grid/action-buttons/action-buttons.component';

@NgModule({
  declarations: [CardComponent, SpinnerComponent, GridComponent, ActionButtonsComponent],
  imports: [
    CommonModule,

    FormsModule,
    MaterialModule
  ],
  exports: [CardComponent, SpinnerComponent, GridComponent],
})
export class SharedModule {}
