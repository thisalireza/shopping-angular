import {Component} from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
    selector: 'app-product-list',
    imports: [
    NgStyle
],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  // name:string = 'alireza';
  addToCard:number=0;
  product = {
    name: 'macbook pro m3 pro',
    image :'https://dkstatics-public.digikala.com/digikala-products/a0d157d46805b4088a34652c667d6fbb2757f5b4_1723039615.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
    color: 'silver',
    price: 117000000,
    discount: 6.5,
    instock: 5,
  }

  products = [
    {
      id: 1,
      name: 'macbook air M2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 99000000,
      discountPrice: 11,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/e75d69cc408ea9d99fee43cd8e3229fa6e57f06a_1723653904.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-react-infinity-run-flyknit',
    },
    {
      id: 2,
      name: 'macbook pro M1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 130,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/046b25e1d0bd544b923b2cd93276dac7183ae958_1671473025.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-react-miler',
    },
    {
      id: 3,
      name: 'macbook air M1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-air-zoom-pegasus-37',
    },
    {
      id: 4,
      name: 'macbook pro M1pro',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', , 'نقره ای', 'طلایی'],
      price: 180,
      discountPrice: 2,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/d96e5acf05f0b91c283fdf2816945fdd0b0e6673_1671296658.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-joyride-run-flyknit',
    },
    {
      id: 5,
      name: 'macbook pro M2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 250,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/8876feb08dc7bce5c5f9991899fae2f733bb0518_1672051722.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-mercurial-vapor-13-elite-fg',
    },
    {
      id: 6,
      name: 'macbook air 2018 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/0640221a44f2fd1413e720004efc88da256b384f_1672570739.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-phantom-vision-elite-dynamic-fit-fg',
    },
    {
      id: 7,
      name: 'macbook air 2019 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'WOMEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'نقره ای', 'طلایی', 'مشکی'],
      price: 80,
      discountPrice: 6,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/dcb735863856217c8f64d891269b876c621772d7_1672570805.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-phantom-venom-academy-fg',
    },
    {
      id: 8,
      name: 'macbook air 2013 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'NIKE',
      gender: 'MEN',
      category: 'FOOTBALL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 145,
      discountPrice: 9,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/c4ea10265a78be861aaae21eb705cdf9e7c8faed_1675586428.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nike-mercurial-vapor-13-elite-tech-craft-fg',
    },



    {
      id: 26,
      name: 'macbook air 2011 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8],
      color: ['سفید', 'آبی', 'مشکی', 'طلایی'],
      price: 55,
      is_in_inventory: false,
      items_left: 6,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/d5ba8b243463c895a0093e3e47b83035b259d57f_1673869909.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nizza-x-disney',
    },
    {
      id: 27,
      name: 'macbook air 2017 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 65,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/44e6ab1de086b966bb3694deee7d550005e3b46f_1673695665.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'x_plr',
    },
    {
      id: 28,
      name: 'macbook pro M1max',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 55,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/de78b22204344d916aaab0661f6f48f4f66adc24_1663158235.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'stan-smith',
    },
    {
      id: 29,
      name: 'macbook pro 2019 i9',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'KIDS',
      category: 'RUNNING',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 120,
      discountPrice: 4,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/112792340.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nmd_r1',
    },
    {
      id: 30,
      name: 'macbook air 2010 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای'],
      price: 140,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/95035ea2be3871b54ed03292d02941d8f569772a_1674457910.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'nmd_r1-flash-طلایی',
    },
    {
      id: 31,
      name: 'macbook pro 2016 i7',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'ADIDAS',
      gender: 'WOMEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['سفید', 'آبی', 'مشکی'],
      price: 90,
      discountPrice: 8,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        'https://dkstatics-public.digikala.com/digikala-products/629077db79b464db05a987679b24bd863500d0eb_1672569174.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'superstar',
    },

    {
      id: 33,
      name: 'macbook air 2019 i5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Vans',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['سفید', 'آبی', 'مشکی', 'طلایی'],
      price: 60,
      discountPrice: 5,
      is_in_inventory: true,
      items_left: 3,
      imageURL: 'https://dkstatics-public.digikala.com/digikala-products/e85329365810c69ae8e4cf1477c5366db564e6fc_1672072947.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'sk80-low',
    },
    {
      id: 34,
      name: 'macbook air M2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Vans',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['سفید', 'آبی', 'مشکی', 'نقره ای', 'طلایی'],
      price: 72,
      is_in_inventory: true,
      items_left: 3,
      imageURL: 'https://dkstatics-public.digikala.com/digikala-products/b872d69721bf570c6c99278a890b6c82c87687db_1723641563.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
      slug: 'michael-feburary-sk8-hi',
    },
  ];

  // getDiscountPrice(): number {
  //   return ( this.product.price - (this.product.price * this.product.discount) / 100)  ;
  // }


  // onNameChange(event:any){
  //   this.name = event.target.value ;
  // }


  addCardValue(event){
    if (this.addToCard<this.product.instock){
      this.addToCard++;

    }
  }

  increaseCardValue(event){

    if(this.addToCard>0){
      this.addToCard--;
    }
  }
}
