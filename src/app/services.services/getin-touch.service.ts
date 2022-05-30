import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MailModel } from '../models/MailModel';

@Injectable({
  providedIn: 'root'
})
export class GetinTouchService {

  baseApiUrl = "http://154.53.44.167:3333/project/add";

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  
  sendMail(formData:MailModel) { 
    return this.http.post<MailModel>(this.baseApiUrl,formData,this.httpOptions)
  }
  
  
}
