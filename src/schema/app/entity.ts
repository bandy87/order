export type Product = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  price: number;
};

export interface CartProduct extends Product {
  quantity: number;
}

export type ProductListItemProps = Product;
