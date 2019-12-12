import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { GoogleLoginButtonComponent } from './socials-login/google-login-button.component';
import { FacebookLoginButtonComponent } from './socials-login/facebook-login-button.component';

import { AuthService as SocialLoginService } from 'angularx-social-login';
// social login, check document here https://github.com/abacritt/angularx-social-login#readme
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LoginOpt } from "angularx-social-login";

import { UtilsModule } from '../utils/utils.module';

export function provideConfig() {
  const googleLoginOptions: LoginOpt = {
    scope: 'profile email'
  }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

  const fbLoginOptions: LoginOpt = {
    scope: 'email',
    return_scopes: true,
    enable_profile_selector: true
  }; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

  return new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(window.appConfig.googleClientId, googleLoginOptions)
  }, {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(window.appConfig.facebookAppId, fbLoginOptions)
  }]);
}

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'forgot',
  component: ForgotComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    SocialLoginModule,
    UtilsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotComponent,
    GoogleLoginButtonComponent,
    FacebookLoginButtonComponent
  ],
  exports: [
    GoogleLoginButtonComponent,
    FacebookLoginButtonComponent
  ],
  providers: [
    SocialLoginService, {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})

export class AuthModule { }
