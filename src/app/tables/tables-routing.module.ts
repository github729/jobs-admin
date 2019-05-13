import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartTableComponent } from "./smart-data-table/smart-data-table.component";

const routes: Routes = [
  {
    path: '',
    children: [
        
      {
        path: 'smart',
        component: SmartTableComponent,
        data: {
          title: 'Smart Table'
        }
      },  
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }
