// import { Component, OnInit } from '@angular/core';
// import { IProducts } from 'src/app/interface/interface';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.scss']
// })
// export class ProductListComponent implements OnInit {
//   clothes:IProducts[]=[];
//   bags:IProducts[]=[];
//   shoes:IProducts[]=[];
//   accessories:IProducts[]=[];

//   constructor(private dataService:DataService){
//   }

//   ngOnInit(): void {
//     this.clothes=this.dataService.getProductsByCategory('Clothes');
//     this.bags=this.dataService.getProductsByCategory('Bags');
//     this.shoes=this.dataService.getProductsByCategory('Shoes');
//     this.accessories=this.dataService.getProductsByCategory('Accessories');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interface/interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categories = [
    { name: 'Clothes', items: [] as IProducts[] },
    { name: 'Bags', items: [] as IProducts[] },
    { name: 'Shoes', items: [] as IProducts[] },
    { name: 'Accessories', items: [] as IProducts[] }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.categories.forEach(category => {
      category.items = this.dataService.getProductsByCategory(category.name);
    });
  }
  
}
