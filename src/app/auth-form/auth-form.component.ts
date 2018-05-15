import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;

  public authForm: FormGroup;
  public error: string;
  public showError: boolean;
  public status: string;
  public showStatus: boolean;

  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }

  ngOnInit() {
    this.showError = false;
    this.showStatus = false;
  }

  createForm() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const body = this.authForm.value;
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers });

    this.http.post(this.url, body, options).subscribe(
      data => {
        this.showStatus = true;
        this.status = `status: ${data.status.toString()}`;
      },
      error => {
        const data = error.json();
        this.error = data.message;
        this.showError = true;
      }
    );
  }
}
