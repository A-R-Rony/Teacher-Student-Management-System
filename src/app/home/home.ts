import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/welcome' }
    });
  }

  signup() {
    this.auth.loginWithRedirect({
      appState: { target: '/welcome' },
      authorizationParams: {
        screen_hint: 'signup'
      }
    });
  }
}
