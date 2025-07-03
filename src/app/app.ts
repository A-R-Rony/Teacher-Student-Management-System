import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AsyncPipe, Location } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';
import {combineLatest, Observable} from 'rxjs';
import { LogoutOptions } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private auth = inject(AuthService);
  private location = inject(Location);
  private router = inject(Router);

  showNavbar$: Observable<boolean> = this.auth.isAuthenticated$.pipe(
    map(isAuth => {
      const path = this.location.path();
      const hiddenRoutes = ['', '/', '/home'];
      return isAuth && !hiddenRoutes.includes(path);
    })
  );

  logout() {
    this.auth.logout({
      returnTo: window.location.origin
    } as Omit<LogoutOptions, 'onRedirect'>);
  }
}
