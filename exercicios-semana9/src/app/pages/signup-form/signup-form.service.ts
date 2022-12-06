import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupFormService {
  constructor() {}

  // save email and password to local storage
  saveUser(data: object) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}
