import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BugReport} from 'src/app/models/BugReport'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  path:string = 'http://ec2-52-14-153-164.us-east-2.compute.amazonaws.com:9000'

  submitNewBugReport(bugReport:BugReport):Promise<BugReport>{
    return this.http.post<BugReport>(this.path+'/BugReport', bugReport).toPromise();
  }

}