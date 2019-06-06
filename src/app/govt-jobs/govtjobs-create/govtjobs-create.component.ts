import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { JobsService } from "app/jobs.service";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: "app-govtjobs-create",
  templateUrl: "./govtjobs-create.component.html",
  styleUrls: ["./govtjobs-create.component.scss"]
})
export class GovtjobsCreateComponent implements OnInit {
  govtJobsForm: FormGroup;
  @ViewChild("fileInput") fileInput;
  states: any;
  industries: any;
  constructor(
    private jobsApi: JobsService,
    private router: Router,
    public toastr: ToastsManager
  ) {}

  ngOnInit() {
    this.jobsApi.getStates().subscribe(data => {
      this.states = data["data"];
    });
    this.jobsApi.getIndustries().subscribe(data => {
      this.industries = data["data"];
    });
    this.govtJobsForm = new FormGroup({
      organisation: new FormControl(null, [Validators.required]),
      postName: new FormControl(null, [Validators.required]),
      qualification: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null),
      stateId: new FormControl(null),
      industryId: new FormControl(null),
      notificationFile: new FormControl(null),
      totalVacancies: new FormControl(null),
      postedDate: new FormControl(null, [Validators.required]),
      officialSite: new FormControl(null)
    });
  }
  onSubmit() {
    this.jobsApi.PostGovtJob(this.govtJobsForm.value).subscribe(res => {
      if (res["success"]) {
        this.router.navigate(["/govt-jobs"]);
      } else {
      }
    });
  }
  public fileChangeEvent(event) {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append(
        "notificationFile",
        this.fileInput.nativeElement.files[0],
        this.fileInput.nativeElement.files[0].name
      );
      this.jobsApi.upload(formData).subscribe(res => {
        if (res["success"]) {
          this.toastr.success(res["message"], "Success!");
          this.govtJobsForm.controls["notificationFile"].setValue(res["data"]);
        } else {
          this.toastr.error(res["message"], "Oops!");
          this.govtJobsForm.controls["notificationFile"].setValue(null);
          this.jobsApi
            .removeFile(this.govtJobsForm.controls["notificationFile"].value)
            .subscribe(res => {});
        }
      });
    }
  }
}
