import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute }  from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  retUrl: string = "home";
  constructor(
    private authserv: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onFormSubmit(loginForm){
    this.authserv.login(loginForm.value.Username, loginForm.value.password).subscribe(data=>{
      if(this.retUrl != null){
        this.router.navigate([this.retUrl]);
      }else{
        this.router.navigate(['home']);
      }
    })
  }
}
