import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  form: FormGroup;
  jobID: number;
  constructor(private fb: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private toasterService: ToastrService,
              private jobService: JobService) {}

  ngOnInit() {
    this.init();
    this.activeRoute.params.subscribe((param: Params) => {
      this.jobService.getJob(param['id']).subscribe(item => {
        this.form.patchValue(item)
      })
    })
  }

  init(): void {
      this.form = this.fb.group({
      id: [null],
      job_title: ['', Validators.required],
      job_notes: ['', Validators.required],
      job_number: ['', Validators.required],
      job_start_date: [null, Validators.required],
      job_close_date: [null, Validators.required],
      experience_required: [null, Validators.required],
    });
  }

  update(): void {
    this.jobService.updateJob(this.form.value).subscribe(() => {
      this.toasterService.success('Update success');
    })
  }
}
