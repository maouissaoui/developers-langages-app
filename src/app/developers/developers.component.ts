import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
dialogStatus = 'inactive';
developers = [];
developer: any = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    competence: '',
    langage: ''
  };
  constructor( private http: Http,
  private route: ActivatedRoute,
  private router: Router
) { }

  ngOnInit() {

      this.http.get('../assets/data/developers.json')
     .map(res => res.json())
     .subscribe( developers => this.developers = developers);

  }

  delete(developer) {
    this.http.delete(`../assets/data/developers.json/${developer.id}`)
      .map( res => res.json() )
      .subscribe( developers => this.developers = developers);
      this.router.navigate(['developers']);

      console.log(this.developers);
  }


    add(developer){
       console.log("Here is post")
       const body=JSON.stringify(developer);
       let headers = new Headers({ 'Content-Type': 'application/json' });

       this.http.post('../assets/data/developers.json',body).subscribe(res=> console.log(res.headers));
       this.hideDialog();

   }

 showDialog() {
   this.dialogStatus = 'active';
 }

 hideDialog() {
   this.dialogStatus = 'inactive';
 }

}
