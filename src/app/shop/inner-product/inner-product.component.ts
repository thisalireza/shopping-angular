import { Component } from '@angular/core';
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'app-inner-product',
  standalone: true,
  imports: [],
  templateUrl: './inner-product.component.html',
  styleUrl: './inner-product.component.scss'
})
export class InnerProductComponent extends ProductListComponent{

}
