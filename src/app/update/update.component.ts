import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../form/';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

developer: any = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    competence: '',
    langage: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {
    this.route.params
      .map((params: any) => params.id)
      .map(id => this.fetchOne(id))
      .subscribe( developer => this.developer = developer);
  }

  fetchOne(id) {
    return this.http.get(`../assets/data/developers.json/${this.developer.id}`)
      .map( res => res.json() );
  }

  submit(developer) {
    return this.http.put(`../assets/data/developers.json/${developer.id}`, developer)
      .map( res => res.json() )
      .subscribe( () => this.router.navigate(['developers']) );
  }

  cancel() {
    this.router.navigate(['developers']);
  }



}
