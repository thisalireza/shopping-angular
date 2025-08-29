import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductService } from "../../services/products.service";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import {NgxSliderModule, Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ProductListComponent,
    CommonModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterForm!: FormGroup;

  categories: string[] = [];
  colors: string[] = [];
  minPrice: number = 0;
  maxPrice: number = 0;


  // مقادیر اسلایدر
  sliderMinValue: number = 0;
  sliderMaxValue: number = 0;
  sliderOptions: Options = {
    floor: 0,
    ceil: 100
  };

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    this.filteredProducts = [...this.products];

    // دسته‌بندی و رنگ‌ها
    this.categories = Array.from(new Set(this.products.map(p => p.category)));
    this.colors = Array.from(
      new Set(
        this.products.reduce<string[]>((acc, product) => {
          if (product.color && Array.isArray(product.color)) {
            acc.push(...product.color);
          }
          return acc;
        }, [])
      )
    );

    // قیمت
    const prices = this.products.map(p => p.price);
    this.minPrice = Math.min(...prices);
    this.maxPrice = Math.max(...prices);

    // مقادیر اسلایدر
    this.sliderMinValue = this.minPrice;
    this.sliderMaxValue = this.maxPrice;
    this.sliderOptions = { floor: this.minPrice, ceil: this.maxPrice };

    // فرم
    this.filterForm = this.fb.group({
      category: [''],
      color: [''],
      minPrice: [this.sliderMinValue],
      maxPrice: [this.sliderMaxValue]
    });

    // تغییر فرم → اعمال فیلتر
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  applyFilters() {
    const { category, color, minPrice, maxPrice } = this.filterForm.value;

    this.filteredProducts = this.products.filter(product => {
      const matchCategory = category ? product.category === category : true;
      const matchColor = color ? product.color.includes(color) : true;
      const matchPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchCategory && matchColor && matchPrice;
    });
  }

  // وقتی اسلایدر تغییر کرد
  onSliderChange() {
    this.filterForm.patchValue({
      minPrice: this.sliderMinValue,
      maxPrice: this.sliderMaxValue
    }, { emitEvent: true });
  }
}
