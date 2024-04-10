import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewRoutingModule } from './products-view-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsViewComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsViewRoutingModule,
  ]
})
export class ProductsViewModule { }
