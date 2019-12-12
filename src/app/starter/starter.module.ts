import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';

import { ProductModule } from '../product/product.module';
import { ShopModule } from '../shop/shop.module';
import { ProfileModule } from '../profile/profile.module';
import { BannerModule } from '../banner/banner.module';
import { OrderModule } from '../order/order.module';
import { UtilsModule } from '../utils/utils.module';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Home'
  },
  component: StarterComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ProductModule,
    ShopModule,
    ProfileModule,
    BannerModule,
    OrderModule,
    UtilsModule
  ],
  declarations: [StarterComponent],
  exports: [
  ]
})
export class StarterModule { }
