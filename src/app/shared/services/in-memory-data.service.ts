import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as productsData from '../../../assets/api/products.json';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const products: IProduct[] = (productsData as any).default;
    return {
      products
    };
  }
}
