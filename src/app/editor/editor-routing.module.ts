import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ServiceSelectorComponent } from './components/service-selector/service-selector.component';
import { RouteParts } from './config/routing.json';

const routes: Routes = [
  {
    path: RouteParts.base,
    component: HomeComponent,
    children: [
      {
        path: 'services',
        component: ServiceSelectorComponent
      },
      {
        path: 'services/:profile',
        component: ServiceSelectorComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':service/:profile',
        component: ListComponent
      },
      {
        path: '**',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
