import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.css'
})
export class ConfirmEmailComponent {



  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    if (this.route.snapshot.queryParamMap.get('auth')) {
      this.authService.checkRegistrationToken(this.route.snapshot.queryParamMap.get('auth')).subscribe(
      );
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  navigateToLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['auth/login']);
  }


}
