import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    token: any;
    userData: any;
    role: any;

    constructor(
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot): any {
        this.token = localStorage.getItem('token');
        this.token = localStorage.getItem('token');
        this.userData = jwt_decode(this.token);
        this.role = this.userData.role;

        if (this.token) {
            if (route.data.roles && route.data.roles.indexOf(this.role) === -1) {
                this.router.navigate(['/home']);
                return false;
            }
            return true;
        }
        this.router.navigate(['login']);
        return false;

    }
}