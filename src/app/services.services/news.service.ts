import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Article } from '../models/ArticleModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseApiUrl = "http://62.171.168.221/article";
  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseApiUrl}/list`);
  }

  getArticle(params:number): Observable<Article> {
    return this.http.get<Article>(`${this.baseApiUrl}/show/${params}`);
  }

  
}
