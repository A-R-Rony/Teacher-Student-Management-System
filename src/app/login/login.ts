import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from '../auth.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
    loginForm: FormGroup  = new FormGroup({
        email: new FormControl(''),
      password: new FormControl('')
    });

    authService: AuthService = inject(AuthService);
    router = inject(Router);
    onLogin() {
      const {email, password} = this.loginForm.value;
      if(this.authService.login(email, password)) {
        alert("Login successfully!");
        this.router.navigate(['/welcome']);
      }else{
        alert("Invalid email or password!");
      }
    }
}
