import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private _services:NewsapiservicesService){}

  //store data
  newsData:any = [];

  ngOnInit(): void {
    this._services.news().subscribe((data) => {
      console.log(data);
      this.newsData = data.articles;
    })
  }
}
