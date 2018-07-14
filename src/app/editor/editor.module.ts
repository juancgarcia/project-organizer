import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { EditorRoutingModule } from './editor-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    FontAwesomeModule,
    NgxDnDModule
  ],
  declarations: [HomeComponent, ListComponent]
})
export class EditorModule { }
