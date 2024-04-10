import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { IProduct, IProducts } from '../models/product.model';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl: string = '/products';

  constructor(
    private apiHttp: ApiHttpService,
  ) { }

  getProducts(): Observable<IProducts> {
    return this.apiHttp.get<IProduct[]>(this.baseUrl)
      .pipe(
        map((products) => ({ totalNoProducts: products.length, products })),
        delay(1500),
      );
  }
}
