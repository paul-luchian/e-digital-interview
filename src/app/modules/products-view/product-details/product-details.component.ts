import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId: string | undefined;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productId = this.router.url.split('/').pop();
  }

}
