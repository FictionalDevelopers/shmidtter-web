import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  private title = 'login';
  private url = '/api/auth/login';

  constructor() {}

  ngOnInit() {}
}
