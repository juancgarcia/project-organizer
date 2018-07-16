import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { EditorRoutingModule } from './editor-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ServiceSelectorComponent } from './components/service-selector/service-selector.component';
import { ScraperService } from './services/scraper.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditorRoutingModule,
    FontAwesomeModule,
    NgxDnDModule
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    ServiceSelectorComponent
  ],
  providers: [
    ScraperService
  ]
})
export class EditorModule { }
