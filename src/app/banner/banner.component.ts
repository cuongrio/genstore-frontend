import { Component, OnInit, Input } from '@angular/core';
import { BannerService } from './service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.html'
})
export class BannerComponent implements OnInit {
  @Input() position: any = 'default';
  public bannerStyle: any = {};
  public banners: any = [];

  public slideConfig: any = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  constructor(private service: BannerService) {
  }

  ngOnInit() {
    this.service.random({
      take: 5,
      position: this.position
    })
      .then(resp => {
        if (resp.data.length) {
          this.banners = resp.data.map(item => {
            return {
              imageUrl: item.media ? item.media.fileUrl : '/assets/images/banner.jpg',
              link: item.link ? item.link : '#'
            };
          });
        } else {
          this.banners = [{
            imageUrl: '/assets/images/banner.jpg'
          }];
        }
      });
  }
}
