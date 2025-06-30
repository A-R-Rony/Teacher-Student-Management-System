import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  signUp(email: string, password: string) {
    const user = {email, password};
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }
  private readonly authKey= "ektiLogginKey";

  login(email: string, password: string) {
     const storedUser = localStorage.getItem('user');
     if(!storedUser){
       return false;
     }
     const user = JSON.parse(storedUser);
     if(user.email === email && user.password === password){
       localStorage.setItem(this.authKey, 'true');
       return true;
     }
     return false
  }
}
