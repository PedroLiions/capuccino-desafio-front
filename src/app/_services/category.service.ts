import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api = environment.api;

  constructor(
      private http: HttpClient
  ) { }

  getProductsCategory(): Observable<any> {
    return this.http.get(`${this.api}/product/categories`);
  }

  getPostCategory(): Observable<any> {
    return this.http.get(`${this.api}/post/categories`)
  }

  createProductCategory(form): Observable<any> {
    return this.http.post(`${this.api}/product/categories`, form);
  }
}
