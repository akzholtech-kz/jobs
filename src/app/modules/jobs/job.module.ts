import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewJobComponent } from './components/new-job/new-job.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { DetailComponent } from './components/detail/detail.component';
import { CommonModule, DecimalPipe } from "@angular/common";
import { DefaultPageComponent } from './default-page/default-page.component';
import { ReactiveFormsModule } from "@angular/forms";
const routes: Routes = [
    {path: '', component: DefaultPageComponent, children: [
        {path: '', component: ListJobsComponent},
        {path: 'new', component: NewJobComponent},
        {path: ':id', component: DetailComponent},
    ]},
]

@NgModule({
    declarations: [
    NewJobComponent,
    ListJobsComponent,
    DetailComponent,
    DefaultPageComponent
  ],
    imports: [
        CommonModule,
        DecimalPipe,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: []
}) 

export class JobModule { }