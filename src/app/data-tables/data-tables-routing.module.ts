import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DTEditingComponent } from "./editing/dt-editing.component";

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'editing',
        component: DTEditingComponent,
        data: {
          title: 'Editing Data Table'
        }
      },
         ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTablesRoutingModule { }