import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private alias: any = null;
  private product: any = null;
  private getProduct: any;
  constructor(private restangular: Restangular) { }

  search(params: any): Promise<any> {
    return this.restangular.one('products', 'search').get(params).toPromise();
  }

  find(alias: string): Promise<any> {
    if (alias !== this.alias) {
      this.getProduct = this.restangular.one('products', alias).get().toPromise()
        .then((resp) => {
          this.product = resp.data;
          this.alias = resp.data.alias;
          return this.product;
        });
      return this.getProduct;
    } else {
      return Promise.resolve(this.product);
    }
  }

  catalogs(productId: string): Promise<any> {
    return this.restangular.one(`products/${productId}`, 'catalogs').get().toPromise();
  }

  related(productId: string, params: any): Promise<any> {
    return this.restangular.one(`products/${productId}`, 'related').get(params).toPromise();
  }
}
