import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-govtjobs-create",
  templateUrl: "./govtjobs-create.component.html",
  styleUrls: ["./govtjobs-create.component.scss"]
})
export class GovtjobsCreateComponent implements OnInit {
  @ViewChild("vform") validationForm: FormGroup;
  govtJobsForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.govtJobsForm = new FormGroup(
      {
        organization: new FormControl(null, [Validators.required]),
        postName: new FormControl(null, [Validators.required]),
        qualification: new FormControl(null, [Validators.required]),
        deadLine: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        industry: new FormControl(null, [Validators.required]),
        notificatioFile: new FormControl(null, [Validators.required]),
        totalVacancies: new FormControl(null, [Validators.required]),
        postedDate: new FormControl(null, [Validators.required]),
        officialSite: new FormControl(null, [Validators.required])
      },
      { updateOn: "blur" }
    );
  }
}
