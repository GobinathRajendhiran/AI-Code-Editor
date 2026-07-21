import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  submitted = false;

  form = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]],
    },
    { validators: this.matchPasswords },
  );

  get f() {
    return this.form.controls;
  }

  matchPasswords(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) return;

    // TODO: call your auth service here
    console.log('Signup:', this.form.value);
    this.router.navigate(['/login']);
  }

  ssoLogin(provider: 'google' | 'github') {
    console.log('SSO signup with', provider);
  }
}