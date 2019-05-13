import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesRoutingModule } from "./data-tables-routing.module";

import { DTEditingComponent } from "./editing/dt-editing.component";

@NgModule({
    imports: [
        CommonModule,
        DataTablesRoutingModule,
        NgxDatatableModule
    ],
    declarations: [
        DTEditingComponent,
    ]
})
export class DataTablesModule { }
