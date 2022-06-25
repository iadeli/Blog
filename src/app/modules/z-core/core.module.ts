import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'src/environments/environment';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '../y-shared/shared.module';

import { GlobalErrorHandler } from './handler/global-error-handler';
import { InMemoryDataService } from './mocks/in-memory-data-service';

import { NavComponent } from './component/nav/nav.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    !environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : [],
    
    SharedModule
  ],
  exports:[
    NavComponent,
    SidebarComponent,
    SharedModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    ...environment.providers
  ]
})
export class CoreModule { }
