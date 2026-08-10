export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
}

export const useProducts = () => {
  const products: Product[] = [
    {
      id: "1",
      title: "Wireless Noise-Cancelling Headphones",
      price: 299.99,
      image: "https://via.placeholder.com/150",
      rating: 4.8
    },
    {
      id: "2",
      title: "Minimalist Smartwatch",
      price: 199.50,
      image: "https://via.placeholder.com/150",
      rating: 4.5
    },
    {
      id: "3",
      title: "Mechanical Typing Keyboard",
      price: 120.00,
      image: "https://via.placeholder.com/150",
      rating: 4.9
    },
    {
      id: "4",
      title: "Ergonomic Office Mouse",
      price: 59.99,
      image: "https://via.placeholder.com/150",
      rating: 4.3
    }
  ];

  return { products };
};