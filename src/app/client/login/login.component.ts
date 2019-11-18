import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
    if (this.auth.isAuthenticated === true) {
      this.router.navigate(['/admin']);
    }
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(){
    this.auth.signInWithEmail(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

}
