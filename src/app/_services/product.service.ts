import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private http: HttpClient,
    ) {
    }

    postProduct(params): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http.post('http://localhost:8080/products', params, {headers: headers});
    }

    show(id): Observable<any> {
        return this.http.get(`http://localhost:8080/products/${id}`);
    }

    destroy(id): Observable<any> {
        return this.http.delete(`http://localhost:8080/products/${id}`);
    }

    getProducts(): Observable<any> {
        return this.http.get('http://localhost:8080/products');
    }
}
