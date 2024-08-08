import { Component } from '@angular/core';
import { TranslationsService } from '../../../shared/translations.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;

  constructor(public translationsService: TranslationsService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.customEmailValidator()]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator.bind(this)]]
    });
  }

  onSubmit(): void {

    if (this.form.valid) {
      this.authService.login(this.form.controls['email'].value, this.form.controls['password'].value).subscribe(
        (response) => {

          if (response.token) {
           /*  localStorage.setItem('userAuth', response.token); */
            this.router.navigate(['/parameters']);
          } else {
            this.form.get('password')?.setErrors({ 'invalidPassword': true });
          }
        }
      );

    } else {
      this.form.markAllAsTouched();
    }
  }
  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value as string;
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>\/?~`]/.test(value);

    if (value && hasNumber && hasSpecialChar) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }

  }

  private customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailRegexp = /^[a-zA-Z0-9._ñÑ+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailRegexp.test(control.value);
      return valid ? null : { customEmail: true };
    }
  }
}
