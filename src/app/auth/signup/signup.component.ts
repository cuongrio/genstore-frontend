import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'signup.component.html'
})
export class SignupComponent {
  Auth: AuthService;
  public dialCode: any = '';
  public account: any = {
    email: '',
    password: '',
    phoneNumber: '',
    name: ''
  };
  public name: any = {
    firstName: '',
    lastName: ''
  };
  public input: any = {
    rePassword: ''
  };
  public submitted: boolean = false;

  constructor(auth: AuthService, public router: Router, private toasty: ToastyService, private translate: TranslateService) {
    this.Auth = auth;
  }

  public onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  selectDial(event) {
    this.dialCode = event;
  }

  public submit(frm: any) {
    this.submitted = true;

    if (frm.invalid) {
      return;
    }

    if (this.account.password !== this.input.rePassword) {
      return this.toasty.error(this.translate.instant('Confirm password doest not match'));
    }

    this.account.name = this.name.firstName + " " + this.name.lastName;
    this.account.phoneNumber = `${this.dialCode}${this.account.phoneNumber}`;

    this.Auth.register(this.account)
      .then(resp => {
        this.toasty.success(this.translate.instant('Your account has been created, please verify your email then login'));
        this.router.navigate(['/auth/login']);
      })
      .catch(err => {
        this.account = {
          email: '',
          password: '',
          phoneNumber: '',
          name: ''
        };
        this.name = {
          firstName: '',
          lastName: ''
        };
        this.input = {
          rePassword: ''
        };
        this.toasty.error(this.translate.instant(err.data.data.message));
      });
  }
}
