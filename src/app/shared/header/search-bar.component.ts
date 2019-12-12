import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../product/services';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.html'
})
export class SearchbarComponent implements OnInit {
  public tree: any = [];

  constructor(public router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.tree()
      .then(resp => this.tree = resp);
  }

  search(item: any) {
    // nativate to search page
    this.router.navigate(['/products/search'], {
      queryParams: { categoryId: item._id }
    });
  }
}
