import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GridComponent } from './components/grid/grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
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
