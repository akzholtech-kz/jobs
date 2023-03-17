import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})
export class NewJobComponent implements OnInit {
  form: FormGroup
  constructor(private fb: FormBuilder,
              private router: Router,
              private toasterService: ToastrService,
              private jobService: JobService) {}

  ngOnInit() {
    this.form = this.fb.group({
      job_title: ['', Validators.required],
      job_notes: ['', Validators.required],
      job_number: ['', Validators.required],
      job_start_date: [null, Validators.required],
      job_close_date: [null, Validators.required],
      experience_required: [null, Validators.required],
    });
  }

  save(): void {
    this.jobService.saveJob(this.form.value).subscribe(() => {
      this.toasterService.success('Job added successfully');
      this.router.navigate(['/jobs']);
    })
  }

}
