import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutesModule } from './routes.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/';
import { DeveloperComponent } from './developer/';
import { DevelopersComponent } from './developers/';
import { UpdateComponent } from './update/';
import { FormComponent } from './form/';
import { LangagesComponent } from './langages/langages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeveloperComponent,
    UpdateComponent,
    DevelopersComponent,
    FormComponent,
    LangagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RoutesModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
