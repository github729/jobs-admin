import { JobsService } from 'app/jobs.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-govtjobs",
  templateUrl: "./govtjobs.component.html",
  styleUrls: ["./govtjobs.component.scss"]
})
export class GovtjobsComponent implements OnInit {
  constructor(private jobsApi: JobsService) {
    this.jobsApi.getGovtJobs().subscribe(res => {
      console.log(res)
    });
  }

  ngOnInit() {}
}
