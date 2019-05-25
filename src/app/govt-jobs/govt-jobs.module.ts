import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GovtJobsRoutingModule } from "./govt-jobs-routing.module";
import { GovtjobsCreateComponent } from "./govtjobs-create/govtjobs-create.component";
import { GovtjobsComponent } from "./govtjobs/govtjobs.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, GovtJobsRoutingModule],
  declarations: [GovtjobsComponent, GovtjobsCreateComponent]
})
export class GovtJobsModule {}
