import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [RouterModule,ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  authService = inject(AuthService);
  router = inject(Router);

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
});

  onSubmit() {
    if(this.signupForm.invalid){
      this.signupForm.markAllAsTouched();
      return;
    }
    const {email, password} = this.signupForm.value;
    this.authService.signUp(email, password);
    alert("Sign up successfully!");
    this.router.navigate(['/login']);
  }

}
