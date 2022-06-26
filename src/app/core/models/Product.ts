export interface Product {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  specification: string[];
  sizes: [
    {
      size: string;
      available: boolean;
    }
  ];
  count: number;
}

export interface ProductDto {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  specification: string[];
  sizes: [
    {
      size: string;
      available: boolean;
    }
  ];
}
