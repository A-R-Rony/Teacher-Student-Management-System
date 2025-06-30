import {Component, inject} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'STManagement';
  location: Location = inject(Location);
  router: Router =inject(Router);

  ShowNavbarFunction()
  {
    const path = this.location.path();
    return !(path === '' || path === '/' || path === '/home' || path === '/login' || path === '/signup');
  }
}
