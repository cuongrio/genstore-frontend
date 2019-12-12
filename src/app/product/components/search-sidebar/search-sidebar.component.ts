import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService, ProductService } from '../../services';
import { ShopService } from '../../../shop/services/shop.service';
import * as _ from 'lodash';

@Component({
  selector: 'search-sidebar',
  templateUrl: './search-sidebar.html'
})
export class SearchSidebarComponent implements OnInit {

  @Output() updateFields = new EventEmitter();
  public tree: any = [];
  public shops: any = [];
  public items: any = [];
  public page: any = 1;
  public itemsPerPage: any = 12;
  public searchFields: any = {
    featured: false,
    hot: false,
    bestSell: false,
    dailyDeal: false,
    discounted: false,
    soldOut: false
  };
  public filterAll = false;
  public routeId: any = {
    categoryId: '',
    shopId: ''
  };

  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
    private shopService: ShopService) {
    this.route.queryParams.subscribe(data => {
      this.routeId.categoryId = data && data.categoryId ? data.categoryId : '';
      this.routeId.shopId =  data && data.shopId ? data.shopId : '';
    });
  }

  ngOnInit() {
    this.categoryService.tree().then(resp => this.tree = resp);
    this.shopService.search({ take: 20, featured: 1 }).then(resp => this.shops = resp.data.items);
  }

  filter() {
    if (this.filterAll ||
      (!this.searchFields.featured &&
        !this.searchFields.hot &&
        !this.searchFields.bestSell &&
        !this.searchFields.discounted &&
        !this.searchFields.dailyDeal && !this.searchFields.soldOut)) {
      this.searchFields = {
        featured: false,
        hot: false,
        bestSell: false,
        dailyDeal: false,
        discounted: false,
        soldOut: false
      };
    }
    this.updateFields.emit(this.searchFields);
  }
}
