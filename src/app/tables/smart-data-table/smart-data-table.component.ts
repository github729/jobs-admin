import { JobsService } from './../../jobs.service';
import { Component, ViewEncapsulation } from '@angular/core';
import * as tableData from '../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-smart-data-table',
  templateUrl: './smart-data-table.component.html',
  styleUrls: ['./smart-data-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SmartTableComponent {
  filterSource: LocalDataSource;

  constructor(private jobsApi: JobsService) {
    this.jobsApi.getJobs().subscribe(res => {
      res['data'].forEach(element => {
        element.approve = true;
      });
      this.filterSource = res['data']; // create the source
    })
  }

  filtersettings = tableData.filtersettings;

  //  For confirm action On Delete
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //  For confirm action On Save
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  //  For confirm action On Create
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
