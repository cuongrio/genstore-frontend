import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services';
import { UtilService } from '../../../shared/services';

@Component({
  selector: 'search-products',
  templateUrl: './search.html'
})
export class SearchComponent implements OnInit {
  public items: any = [];
  public page: any = 1;
  public itemsPerPage: any = 12;
  public searchFields: any = {
    q: '',
    categoryId: '',
    shopId: '',
    featured: '',
    hot: '',
    bestSell: '',
    dailyDeal: '',
    soldOut: '',
    discounted: ''
  };
  public sort: any = '';
  public sortType: any = '';
  public total: any = 0;
  public isLoading = false;

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private utilService: UtilService) {
    this.route.queryParamMap.subscribe((params: Params) => {
      if (params && (params.params.shopId ||  params.params.categoryId
         || params.params.q || params.params.featured || params.params.hot ||
         params.params.bestSell || params.params.dailyDeal || params.params.soldOut ||
         params.params.discounted)) {
          this.searchFields = {
            q: '',
            featured: '',
            hot: '',
            bestSell: '',
            dailyDeal: '',
            soldOut: '',
            discounted: ''
          };
        this.searchFields = Object.assign(this.searchFields, params.params);
        this.query();
      }else {
        this.searchFields = {
          q: '',
          categoryId: '',
          shopId: '',
          featured: '',
          hot: '',
          bestSell: '',
          dailyDeal: '',
          soldOut: '',
          discounted: ''
        };
        this.query();
      }
    });
  }

  ngOnInit() {
  }

  query() {
    this.utilService.setLoading(true);
    this.isLoading = true;
    const params = Object.assign({
      page: this.page,
      take: this.itemsPerPage,
      sort: this.sort,
      sortType: this.sortType
    }, this.searchFields);

    this.productService.search(params).then((res) => {
      this.items = res.data.items;
      this.total = res.data.count;
      this.utilService.setLoading(false);
      this.isLoading = false;
    })
      .catch(() => {
        this.utilService.setLoading(false);
        this.isLoading = false;
      });
  }

  changeSort(sort: string, $event: any) {
    this.sort = sort;
    this.sortType = $event.target.value;
    this.page = 1;
    this.query();
  }

  updateFields(event: any) {
    for (const key in event) {
      if (event.hasOwnProperty(key) && event[key]) {
        this.searchFields[key] = event[key];
      } else {
        this.searchFields[key] = '';
      }
    }
    this.query();
  }
}
