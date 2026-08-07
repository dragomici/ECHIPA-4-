import QuinoaImage from '../assets/OrganicQuinoeIcon.svg';
import IcecreamImage from '../assets/Icecreamicon.svg';
import CornImage from '../assets/corn.svg';
import AvocadoImage from '../assets/Avocado.svg';

import Deal1Image from '../assets/deals/deal1.png';
import Deal2Image from '../assets/deals/deal2.png';
import Deal3Image from '../assets/deals/deal3.png';
import Deal4Image from '../assets/deals/deal4.png';

export const mockDeals = [
  {
    id: 'd1',
    title: 'Seeds of Change Organic Quinoa, Brown',
    brand: 'NestFood',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: Deal1Image,
    rating: 4.0,
    targetDate: new Date(Date.now() + 426 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'd2',
    title: 'Perdue Simply Smart Organics Gluten',
    brand: 'Old El Paso',
    currentPrice: 24.85,
    oldPrice: 26.8,
    imageUrl: Deal2Image,
    rating: 4.0,
    targetDate: new Date(Date.now() + 822 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'd3',
    title: 'Signature Wood-Fired Mushroom',
    brand: 'Progresso',
    currentPrice: 12.85,
    oldPrice: 13.8,
    imageUrl: Deal3Image,
    rating: 3.0,
    targetDate: new Date(Date.now() + 1156 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'd4',
    title: 'Simply Lemonade with Raspberry Juice',
    brand: 'Yoplait',
    currentPrice: 15.85,
    oldPrice: 16.8,
    imageUrl: Deal4Image,
    rating: 3.0,
    targetDate: new Date(Date.now() + 398 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export const mockProducts = [
  {
    id: '1',
    title: 'Seeds of Change Organic Quinoa',
    category: 'Snack',
    currentPrice: 28.85,
    oldPrice: 32.80,
    imageUrl: QuinoaImage,
    rating: 4.0,
    ratingCount: 12,
    badgeText: 'Hot',
    badgeVariant: 'hot' as const
  },
  {
    id: '2',
    title: 'All Natural Italian-Style Chicken Meatballs',
    category: 'Meats',
    currentPrice: 52.85,
    oldPrice: 55.80,
    imageUrl: IcecreamImage,
    rating: 3.5,
    ratingCount: 8,
    badgeText: 'Sale',
    badgeVariant: 'sale' as const
  },
  {
    id: '3',
    title: 'Angie’s Boomchickapop Sweet & Salty',
    category: 'Snack',
    currentPrice: 48.85,
    oldPrice: 52.80,
    imageUrl: CornImage,
    rating: 4.0,
    ratingCount: 15,
    badgeText: 'New',
    badgeVariant: 'new' as const
  },
  {
    id: '4',
    title: 'Foster Farms Takeout Crispy Classic',
    category: 'Meats',
    currentPrice: 17.85,
    oldPrice: 19.80,
    imageUrl: AvocadoImage,
    rating: 4.0,
    ratingCount: 10
  }
];
