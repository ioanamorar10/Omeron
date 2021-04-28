import { Component } from '@angular/core';
import { DataService } from './service/data.service'
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  nav:any;

  token:any;
  userData: any;
  role: any;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.role = this.userData.role;
    console.log(this.token);
    console.log(this.userData);
    console.log(this.role);

    this.nav= 'login';

    if(this.token){
      if(this.role === 'user'){
        this.nav = 'user'
      } else {
        this.nav = 'admin'
      }
    } else {
      this.nav = 'login'
    }

    console.log("hei hei nav miq", this.nav);
  }

  logout(){
    this.dataService.logout();
    this.nav = 'login';
  }
}
