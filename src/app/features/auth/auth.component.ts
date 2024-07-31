import { Component, ViewEncapsulation } from '@angular/core';
import { TranslationsService } from '../../shared/translations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  registerView: boolean = false;

  constructor(public translationsService: TranslationsService, public router: Router) { }

  ngOnInit() {
    this.registerView = this.router.url.endsWith('/register');
    if (this.router.url.endsWith('/auth')) {
      this.router.navigate(['']);
    }
  }
}
