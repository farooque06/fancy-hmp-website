import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productpageTitle = 'Our Products';
  productPageContent =
    'We offer a curated selection of sustainable, high-quality hemp products. From clothing and bags to shoes and accessories, find pieces that seamlessly fit your lifestyle and values.';

  allProducts: IProducts[] = []; 

  categories = [
    { name: 'Clothes', items: [] as IProducts[] },
    { name: 'Bags', items: [] as IProducts[] },
    { name: 'Shoes', items: [] as IProducts[] },
    { name: 'Accessories', items: [] as IProducts[] },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.allProducts = this.dataService.getProducts();
    this.initializeCategories(this.allProducts);
  }

  initializeCategories(products: IProducts[]): void {
    this.categories.forEach((category) => {
      category.items = products.filter(
        (product) => product.category === category.name
      );
    });
  }

  updateList(gender: string) {
    let filteredProducts: IProducts[];

    if (gender === 'all') {
      filteredProducts = this.allProducts;
    } else {
      filteredProducts = this.allProducts.filter(
        (product) => product.type === gender || product.type === 'both'
      );
    }
    this.initializeCategories(filteredProducts);
  }
}
