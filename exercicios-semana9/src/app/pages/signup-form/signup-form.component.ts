import { Component } from '@angular/core';
import { SignupFormService } from './signup-form.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  constructor(private readonly service: SignupFormService) {}

  email: string = '';
  password: string = '';
  handleClick() {
    const data = {
      email: this.email,
      password: this.password,
    };
    this.service.saveUser(data);
  }
}
