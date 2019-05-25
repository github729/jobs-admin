import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GovtjobsComponent } from "./govtjobs/govtjobs.component";
import { GovtjobsCreateComponent } from "./govtjobs-create/govtjobs-create.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: 'list', component: GovtjobsComponent },
      {
        path: "create",
        component: GovtjobsCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovtJobsRoutingModule {}
