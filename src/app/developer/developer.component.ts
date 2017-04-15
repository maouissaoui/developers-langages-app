import { Component, OnInit } from '@angular/core';
import { DEVELOPER } from '../_static/developer-a';

@Component({
  moduleId: module.id,
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  private developer: any = {};

  constructor() { }

  ngOnInit() {
  this.developer = DEVELOPER[0];

  }

}
