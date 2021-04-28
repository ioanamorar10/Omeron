import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service'
import { Router } from '@angular/router'
import { AppComponent } from '../../app.component';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  form!: FormGroup;
  data: any;
  token: any;
  userData:any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f() {
    return this.form.controls;
  }

  redirectRegister(){
    this.router.navigate(['/register'])
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.dataService.login(this.form.value).subscribe(res => {
      this.data = res;
      // console.log(res);

      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        // window.location.reload();
        this.userData = jwt_decode(this.token);
        this.appComponent.nav = this.userData.role;
        this.router.navigate(['/home']);
      } else {
        console.log('error');
      }

      this.submitted = false;
      this.form.reset();
    })
  }

}
