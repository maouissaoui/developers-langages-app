import { Component, OnInit } from '@angular/core';
import { DeveloperComponent } from '../developer/';
import { DevelopersComponent } from '../developers/';

@Component({
moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name:'Angular 2';
  constructor() {
  }

  ngOnInit() {
  }

}
