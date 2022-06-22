import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    NavComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
