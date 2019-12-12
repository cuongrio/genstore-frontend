import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModule } from '../product/product.module';
import { MediaModule } from '../media/media.module';
import { UtilsModule } from '../utils/utils.module';

import { ProfileRoutingModule } from './profile.routing';

import { WishListComponent } from './components/wishlist/list.component';
import { UpdateComponent } from './components/update/update.component';
import { RefundListingComponent } from './components/refund/refund-listing.component';

import { WishlistService, RefundService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ProfileRoutingModule,
    ProductModule,
    MediaModule,
    UtilsModule
  ],
  declarations: [
    WishListComponent,
    UpdateComponent,
    RefundListingComponent
  ],
  providers: [
    WishlistService,
    RefundService
  ],
  exports: [
    WishListComponent,
    UpdateComponent
  ]
})
export class ProfileModule { }
