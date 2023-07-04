import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-05-23&sortBy=publishedAt&apiKey=6db2ada2560d4299955ced3c23092bd2";

  news():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
