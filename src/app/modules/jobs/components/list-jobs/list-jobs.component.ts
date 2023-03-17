import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  jobs: any;
  constructor(
    private jobService: JobService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) {}

  ngOnInit() {
    this.getListJobs();
  }

  getListJobs() {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    })    
  }

  onDetail(id: number) {
    this.router.navigate([id], {relativeTo: this.activeRoute});
  }

  delete(id: number) {
    this.jobService.deleteJob(id).subscribe(() => {
      this.toastrService.success('Job deleted');
      this.getListJobs();
    });
  }
  
}
