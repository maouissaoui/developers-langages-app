import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  moduleId: module.id,
  selector: 'app-langages',
  templateUrl: './langages.component.html',
  styleUrls: ['./langages.component.css']
})
export class LangagesComponent implements OnInit {
dialogStatus = 'inactive';
langages = [];
  constructor( private http: Http
) { }

  ngOnInit() {

      this.http.get('../assets/data/langages.json')
     .map(res => res.json())
     .subscribe( langages => this.langages = langages);

  }


}
