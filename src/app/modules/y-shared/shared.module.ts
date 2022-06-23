import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatSnackBarModule    
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
