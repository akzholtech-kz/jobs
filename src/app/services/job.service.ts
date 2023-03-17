import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class JobService {
    constructor(private http: HttpClient) { }


    getJobs(): Observable<any> {
        return this.http.get("/jobs");
    }

    getJob(id: number): Observable<any> {
        return this.http.get(`/jobs/${id}`);
    }

    saveJob(job): Observable<any> {
        return this.http.post("/jobs", job);
    }

    updateJob(job): Observable<any> {
        return this.http.put(`/jobs/${job.id}`, job);
    }

    deleteJob(id): Observable<any> {
        return this.http.delete(`/jobs/${id}`);
    }

}