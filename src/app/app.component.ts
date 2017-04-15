import { Component } from '@angular/core';
import { HomeComponent } from './home/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [HomeComponent]

})
export class AppComponent {
name:string;
constructor() {
      this.name = 'Angular 2';
   }
   }
