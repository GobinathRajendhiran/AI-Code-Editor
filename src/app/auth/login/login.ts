import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   private fb = inject(FormBuilder);
  private router = inject(Router);

  submitted = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false],
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) return;

    // TODO: call your auth service here
    console.log('Login:', this.form.value);
    this.router.navigate(['/']); // redirect after success
  }

  ssoLogin(provider: 'google' | 'github') {
    // TODO: trigger your OAuth flow
    console.log('SSO login with', provider);
  }
}
