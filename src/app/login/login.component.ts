import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router : Router) { }

 public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    // length is required
    if (this.form.valid && this.form.value.password && this.form.value.username) {
      window.sessionStorage.setItem('isLoggedIn' , 'true');
      this.router.navigate(['board']);
    }
  }

  ngOnInit() {
  }

}
