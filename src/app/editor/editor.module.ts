import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { EditorRoutingModule } from './editor-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    NgxDnDModule
  ],
  declarations: [HomeComponent, ListComponent]
})
export class EditorModule { }
