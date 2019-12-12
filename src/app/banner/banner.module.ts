import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner.component'

import { BannerService } from './service';

import { AuthModule } from '../auth/auth.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthModule,
    SlickCarouselModule
  ],
  declarations: [
    BannerComponent
  ],
  providers: [
    BannerService
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
