import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

  products: IProduct[] = [];

  totalNoProducts: number | undefined;

  viewType: 'list' | 'grid' = 'grid';

  isLoading: boolean = true;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.isLoading = true;
    this.productService.getProducts()
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.totalNoProducts = data.totalNoProducts;
          this.products = data.products;
        },
        error: () => { this.isLoading = false; }
      });
  }

}
