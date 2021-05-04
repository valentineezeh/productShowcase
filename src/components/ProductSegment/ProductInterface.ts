interface VariantsData {
  id: string;
  quantity: number;
  title: string;
  sku: string;
}

export interface ProductData {
  id: string;
  title: string;
  images: string[];
  category: string;
  description: string;
  price: string;
  tags: string[];
  variants: Array<VariantsData>;
}

export interface ProductState {
  products?: Array<ProductData>;
  isLoading?: boolean;
  error?: string;
}
