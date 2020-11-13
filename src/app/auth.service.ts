import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;
  private userName: string;

  constructor() { 
    this.isloggedIn = false;
  }

  login(username: string,password: any){
    this.isloggedIn = true;
    return of(this.isloggedIn);
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
}

}
