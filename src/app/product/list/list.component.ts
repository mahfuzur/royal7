import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { KeyValueChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any = [];
  carts: any = {};
  isLoading: boolean = true;
  showCart: boolean = false;
  cartsDiffer: KeyValueDiffer<string, any>;

  constructor(private api: ApiService, private differ: KeyValueDiffers) {
    if (localStorage.getItem('cart')) {
      this.carts = JSON.parse(localStorage.getItem('cart'))
    }

  }

  ngOnInit() {
    this.api.getProducts().subscribe(res => {
      this.products = res;
      this.isLoading = false;
    })

    this.cartsDiffer = this.differ.find(this.carts).create();
  }

  addToCart(item: any, value: number) {
    if (!this.carts[item.id]) {
      this.carts[item.id] = 0;
    }
    this.carts[item.id] += value;

    if (this.carts[item.id] <= 0) {
      delete this.carts[item.id];
    }
  }

  getQuantity(item: any) {
    return !!this.carts[item.id]
  }

  cartChanged(changes: KeyValueChanges<string, any>) {
    localStorage.setItem('cart', JSON.stringify(this.carts))
  }

  ngDoCheck(): void {
    const changes = this.cartsDiffer.diff(this.carts);
    if (changes) {
      this.cartChanged(changes);
    }
  }

  cartProducts(): any[] {
    return this.products.filter(item => !!this.carts[item.id])
  }

  getTotalPrice() {
    return this.cartProducts().reduce((acc, cur) => {
      acc += this.carts[cur.id] * cur.price;
      return acc;
    }, 0)
  }
}
