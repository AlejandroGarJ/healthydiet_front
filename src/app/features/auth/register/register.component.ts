import { Component, EventEmitter, Output } from '@angular/core';
import { TranslationsService } from '../../../shared/translations.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form: FormGroup;
  emailSent: boolean = false;

  constructor(public translationsService: TranslationsService,
    private formBuilder: FormBuilder,
    private authService: AuthService) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, this.customEmailValidator()]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator.bind(this)]],
      confirmPassword: ['', [Validators.required]]
    });

  }

  onSubmit(): void {
    if (this.form.valid) {

      if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) this.form.get('confirmPassword')?.setErrors({ 'invalidConfirmPassword': true });
      else {
        this.authService.sendRegisterForm(this.form.controls['email'].value, this.form.controls['password'].value).subscribe(
          (res) => {
            if (res.response === 'Email enviado correctamente') this.emailSent = true;
            else {
              this.form.get('email')?.setErrors({ 'invalidEmail': true });
            }
          }
        )
      }
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
