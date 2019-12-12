import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private Auth: AuthService;
  public credentials = {
    email: '',
    password: ''
  };
  public submitted: boolean = false;

  constructor(auth: AuthService, public router: Router, private translate: TranslateService, private toasty: ToastyService) {
    this.Auth = auth;
  }

  login(frm: any) {
    this.submitted = true;
    if (frm.invalid) {
      return;
    }

    this.Auth.login(this.credentials).then(() => {
      const redirectUrl = sessionStorage.getItem('redirectUrl');
      if (redirectUrl) {
        sessionStorage.removeItem('redirectUrl');
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }
    })
      .catch(() => {
        this.toasty.error(this.translate.instant('Your account is not activated or register. Please recheck again or contact to our admin to resolve it.'));
      });
  }
}
