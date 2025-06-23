export interface GetProductType {
  _id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string[];
  category?: string;
  subCategory?: string;
  inStock?: number;
  weight?: number;
  sku?: string;
  gender?: string;
  brand?: string;
  purity?: string;
  material?: string;
}
export interface AddProductType {
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  subCategory: string;
  inStock: number;
  weight: number;
  sku: string;
  gender: string;
  brand: string;
  purity: string;
  material: string;
  image: string[];
}
export interface UpdateProductTypes {
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  subCategory: string;
  inStock: number;
  weight: number;
  sku: string;
  gender: string;
  brand: string;
  purity: string;
  material: string;
  image: string[];
}
