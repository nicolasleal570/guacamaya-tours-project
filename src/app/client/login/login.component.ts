import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();

    this.auth.authState.subscribe(user => {
      if (user) {
        this.router.navigate(['/admin']);
      }
    });
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(){
    console.log('Datos del form',this.loginForm.value);
    this.auth.auth.signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value).then(success => {
      console.log('Sesión iniciada correctamente');
    }).catch(err => {
      console.log(err);
    });
    
  }

}
