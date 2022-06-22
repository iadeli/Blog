import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,

    MatCardModule
  ],
  exports:[
    NavComponent,
    SidebarComponent,
    ArticleComponent
  ]
})
export class CoreModule { }
