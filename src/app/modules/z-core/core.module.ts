import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavComponent } from './component/nav/nav.component';
import { GlobalErrorHandler } from './handler/global-error-handler';
import { SharedModule } from '../y-shared/shared.module';

@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    
    SharedModule
  ],
  exports:[
    NavComponent,
    SidebarComponent
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}]
})
export class CoreModule { }
