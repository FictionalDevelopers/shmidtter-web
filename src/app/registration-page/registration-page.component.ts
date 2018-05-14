import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  private title = 'registration';
  private url = '/api/auth/register';

  constructor() {}

  ngOnInit() {}
}
