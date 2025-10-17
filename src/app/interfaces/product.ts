export interface Product {
  id: number;
  name: string;
  description?: string;
  brand?: string;
  category?: string;
  innerCategory?: string;
  gender?: string;
  size?: number[];
  color?: string[];
  price: number;
  discountPrice: number;
  is_in_inventory?: boolean;
  items_left?: number;
  imageURL: string;
  slug?: string;
  quantity?: number;

}
