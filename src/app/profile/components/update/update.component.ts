import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../../shared/services';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'update-component',
  templateUrl: './update.html'
})
export class UpdateComponent implements OnInit, OnDestroy {
  public isSubmitted: boolean = false;
  private userLoadedSubscription: Subscription;
  public info: any = {};
  public avatarOptions: any = {};
  public avatarUrl: any = '';

  constructor(private translate: TranslateService, private router: Router, private authService: AuthService, private toasty: ToastyService) {
    if (this.authService.isLoggedin()) {
      this.authService.me().then((resp) => {
        this.info = resp.data;
        this.avatarUrl = resp.data.avatarUrl;
      });
    }
    this.userLoadedSubscription = authService.userLoaded$.subscribe(data => this.info = data);
  }

  ngOnInit() {
    this.avatarOptions = {
      url: window.appConfig.apiBaseUrl + '/users/avatar',
      fileFieldName: 'avatar',
      onFinish: (resp) => {
        this.avatarUrl = resp.data.url;
        this.info.avatarUrl = resp.data.url;
      }
    }
  }

  ngOnDestroy() {
    this.userLoadedSubscription.unsubscribe();
  }

  submit(frm: any) {
    this.isSubmitted = true;
    if (!frm.valid) {
      return this.toasty.error(this.translate.instant('Something went wrong, please check and try again!'));
    }

    this.authService.updateMe(this.info).then(resp => {
      this.toasty.success(this.translate.instant('Updated successfuly!'));
    }).catch((err) => this.toasty.error(this.translate.instant('Something went wrong, please check and try again!')));
  }
}
