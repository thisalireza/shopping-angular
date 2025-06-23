import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, viewChild} from '@angular/core';
import {CurrencyPipe, NgClass, NgIf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';
import {LikeService} from "../../services/like.service";
import {style} from "@angular/animations";
@Component({
  selector: 'app-product-list',
  imports: [
    NgStyle,
    NgIf,
    NgClass,
    RouterLink,
    CurrencyPipe,
  ],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Output() toggleLikeEvent = new EventEmitter<number>();
  @Input() showAllProducts: boolean = true;



  constructor(private route:Router , public likeService: LikeService) {
    this.products = this.showAllProducts
      ? this.likeService.getAllProducts()
      : this.likeService.getLikedProducts();
  }

  handleToggleLike(index: number): void {
    const product = this.products[index];
    this.toggleLikeEvent.emit(product.id);
    const isLiked = !this.likeService.getProductLike(product.id);
    this.likeService.setProductLike(product.id, isLiked);
  }

  goToProductInfo(item){
    this.route.navigate(['/products/info'], {queryParams:{id:item.id, title:item.title}});
  }


  get containerClasses(): string {
    return `row row-cols-2 ${this.showAllProducts ? 'row-cols-md-4 g-4' : ' row-cols-md-3 g-4'} g-4`;
  }


  addToCard: number = 0;
  product = {}
  @Input() products = [
    {
      id: 0,
      name: 'macbook air M2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 88300000,
      discountPrice: 1,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/155a965d-0962-408d-7dea-557a62fc3900/height=364,width=364',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 1,
      name: 'macbook pro M1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 66000000,
      discountPrice: 5,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/619c6e9d-9e4e-4c43-98d2-b27c783ff800/height=364,width=364',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'macbook air M1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 53000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/682589c3-7c88-4652-968e-f6cf3bfdb300/height=364,width=364',
      slug: 'nike-air-zoom-pegasus-37',
    },
    {
      id: 4,
      name: 'macbook pro M1pro',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', , 'نقره ای', 'طلایی'],
      price: 93000000,
      discountPrice: 5,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/21397e47-c638-43de-026c-009a773b8800/height=364,width=364',
      slug: 'nike-joyride-run-flyknit',
    },
    {
      id: 5,
      name: 'macbook pro M2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 60,
      discountPrice: 5,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/3538448b-424f-4ad6-803a-517567ec3d00/height=364,width=364',
      slug: 'nike-mercurial-vapor-13-elite-fg',
    },
    {
      id: 6,
      name: 'macbook air 2018 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 45000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/dbeb9e5d-3a31-4df0-282d-0666b1f89800/height=364,width=364',
      slug: 'nike-phantom-vision-elite-dynamic-fit-fg',
    },
    {
      id: 7,
      name: 'macbook air 2019 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'نقره ای', 'طلایی', 'مشکی'],
      price: 34000000,
      discountPrice: 6,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/b92a2acb-2d9d-46b4-92fd-40c886836f00/height=364,width=364',
      slug: 'nike-phantom-venom-academy-fg',
    },
    {
      id: 8,
      name: 'macbook air 2013 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'MEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 145,
      discountPrice: 9,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/e9ea450d-7090-4309-5038-92acb8b64000/height=364,width=364',
      slug: 'nike-mercurial-vapor-13-elite-tech-craft-fg',
    },
    {
      id: 26,
      name: 'macbook air 2011 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8],
      color: ['سفید', 'آبی', 'مشکی', 'طلایی'],
      price: 145,
      discountPrice: 9,
      is_in_inventory: false,
      items_left: 0,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/dbb5dc2c-9351-4ffa-3e35-e2586c807a00/height=364,width=364',
      slug: 'nizza-x-disney',
    },
    {
      id: 27,
      name: 'macbook air 2017 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 27000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/47c93033-b5ef-426e-aa09-53ad1f3be900/height=364,width=364',
      slug: 'x_plr',
    },
    {
      id: 28,
      name: 'macbook pro M1max',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 120000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/c26e683d-11df-4546-84c7-ca9286c42d00/height=364,width=364',
      slug: 'stan-smith',
    },
    {
      id: 29,
      name: 'macbook pro 2019 i9',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'KIDS',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 70000000,
      discountPrice: 4,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/34374730-ce80-44a1-bcca-698499bfbc00/height=364,width=364',
      slug: 'nmd_r1',
    },
    {
      id: 30,
      name: 'macbook air 2010 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای'],
      price: 20000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/dccb26a2-e386-49a7-929d-f77130407900/height=364,width=364',
      slug: 'nmd_r1-flash-طلایی',
    },
    {
      id: 31,
      name: 'macbook pro 2016 i7',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 60000000,
      discountPrice: 8,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/e45fb01d-52ae-41fe-e478-2a2965ccb700/height=364,width=364',
      slug: 'superstar',
    },

    {
      id: 33,
      name: 'macbook air 2019 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['سفید', 'آبی', 'مشکی', 'طلایی'],
      price: 37000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/cbfc1cfc-5e8d-4e29-54b6-a3910d3fd400/height=364,width=364',
      slug: 'sk80-low',
    },
    {
      id: 34,
      name: 'macbook air M2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'اپل',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 780000000,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://imagedelivery.net/eAUy1amtjBjgyIgDFXrGvQ/46ce84fb-800f-4429-c42a-635c39581a00/height=364,width=364',
      slug: 'michael-feburary-sk8-hi',
    },
  ];

  // getDiscountPrice(): number {
  //   return ( this.product.price - (this.product.price * this.product.discount) / 100)  ;
  // }


  // onNameChange(event:any){
  //   this.name = event.target.value ;
  // }

  likes: boolean[] = new Array(this.products.length).fill(false); // like & unlike , so must boolean type.

  toggleLike(index: number): void {
    const product = this.products[index];
    const isLiked = !this.likeService.getProductLike(product.id);
    this.likeService.setProductLike(product.id, isLiked);
  }








  addToCart: number[] = new Array(this.products.length).fill(0);


  productUrlAddress:string=this.products[0].slug;

  addCardValue(index: number): void {
    const product = this.products[index];

    // Ensure product exists and items_left is defined
    if (product && product.items_left !== undefined) {
      const itemsLeft = product.items_left;

      // Check if there are items left to add to the cart
      if (this.addToCart[index] < product.items_left) {
        this.addToCart[index]++; // Add one more item to the cart
      }

    }
  }


  increaseCardValue(index: number): void {
    if (this.addToCart[index] > 0) {
      this.addToCart[index]--;
    }
  }

}
