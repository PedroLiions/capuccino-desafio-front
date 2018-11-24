import {Component, OnInit} from '@angular/core';
import {Category} from "../../_models/Category";
import {CategoryService} from "../../../_services/category.service";

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

    categories: Category[];

    categoryName;

    constructor(
        private categoryService: CategoryService
    ) {
    }

    ngOnInit() {
        this.categoryService.getProductsCategory()
            .subscribe(res => {
                console.log(res);
                this.categories = res.data;
            });
    }

    setName(value) {
        this.categoryName = value;
    }

    createCategory() {
        let form = new FormData();
        form.append('name', this.categoryName);
        this.categoryService.createProductCategory(form)
            .subscribe(res => {
                console.log(res);
                this.categories.push(res.data);
            }, err => console.log(err));
    }

}
