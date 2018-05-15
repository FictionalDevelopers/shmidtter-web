import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  private authType = 'registration';
  private authAction = '/api/auth/register';

  constructor() {}

  ngOnInit() {}
}
