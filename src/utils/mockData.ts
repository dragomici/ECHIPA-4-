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
    stock: 12,
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
    stock: 8,
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
    stock: 5,
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
    stock: 20,
    targetDate: new Date(Date.now() + 398 * 24 * 60 * 60 * 1000).toISOString()
  }
];

import SahaleBeanImage from '../assets/sahale-bean.jpg';
import CoconutFlakesImage from '../assets/coconut-flakes.jpg';
import VeggiePopsImage from '../assets/veggie-pops.jpg';
import SahaleRaspberryImage from '../assets/sahale-raspberry.jpg';
import DandyBlendImage from '../assets/dandy-blend.jpg';
import MightyMuffinImage from '../assets/mighty-muffin.jpg';
import PistachioButterImage from '../assets/pistachio-butter.jpg';
import YujaNiacinImage from '../assets/yuja-niacin.jpg';
import CafeAlturaImage from '../assets/cafe-altura.jpg';
import PukkaLatteImage from '../assets/pukka-latte.jpg';

export const mockProducts = [
  {
    id: '1',
    title: 'Seeds of Change Organic Quinoa',
    category: 'Snack',
    currentPrice: 28.85,
    oldPrice: 32.80,
    imageUrl: DandyBlendImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 15,
    badgeText: 'Hot',
    badgeVariant: 'hot' as const
  },
  {
    id: '2',
    title: 'All Natural Italian-Style Chicken Meatballs',
    category: 'Hodo Foods',
    currentPrice: 52.85,
    oldPrice: 55.80,
    imageUrl: SahaleRaspberryImage,
    rating: 3.5,
    ratingCount: 3.5,
    stock: 7,
    badgeText: 'Sale',
    badgeVariant: 'sale' as const
  },
  {
    id: '3',
    title: 'Angie\'s Boomchickapop Sweet & Salty',
    category: 'Snack',
    currentPrice: 48.85,
    oldPrice: 52.80,
    imageUrl: VeggiePopsImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 22,
    badgeText: 'New',
    badgeVariant: 'new' as const
  },
  {
    id: '4',
    title: 'Foster Farms Takeout Crispy Classic',
    category: 'Vegetables',
    currentPrice: 17.85,
    oldPrice: 19.80,
    imageUrl: SahaleBeanImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 10
  },
  {
    id: '5',
    title: 'Blue Diamond Almonds Lightly',
    category: 'Pet Foods',
    currentPrice: 23.85,
    oldPrice: 25.80,
    imageUrl: CoconutFlakesImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 14,
    badgeText: '-14%',
    badgeVariant: 'discount' as const
  },
  {
    id: '6',
    title: 'Chobani Complete Vanilla Greek',
    category: 'Hodo Foods',
    currentPrice: 54.85,
    oldPrice: 55.80,
    imageUrl: MightyMuffinImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 18
  },
  {
    id: '7',
    title: 'Canada Dry Ginger Ale - 2 L Bottle',
    category: 'Meats',
    currentPrice: 32.85,
    oldPrice: 33.80,
    imageUrl: PistachioButterImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 9
  },
  {
    id: '8',
    title: 'Encore Seafoods Stuffed Alaskan',
    category: 'Snack',
    currentPrice: 35.85,
    oldPrice: 37.80,
    imageUrl: YujaNiacinImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 11,
    badgeText: 'Sale',
    badgeVariant: 'sale' as const
  },
  {
    id: '9',
    title: 'Gorton\'s Beer Battered Fish Fillets',
    category: 'Coffees',
    currentPrice: 23.85,
    oldPrice: 25.80,
    imageUrl: CafeAlturaImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 16,
    badgeText: 'Hot',
    badgeVariant: 'hot' as const
  },
  {
    id: '10',
    title: 'Haagen-Dazs Caramel Cone Ice Cream',
    category: 'Cream',
    currentPrice: 22.85,
    oldPrice: 24.80,
    imageUrl: PukkaLatteImage,
    rating: 2.0,
    ratingCount: 2.0,
    stock: 6
  }
];

import CarrotsImage from '../assets/Carrots.svg';
import BananaImage from '../assets/banana.svg';
import AvocadoImage from '../assets/Avocado.svg';
import CornImage from '../assets/corn.svg';
import BellPeppersImage from '../assets/bell-peppers.jpg';
import PomegranateImage from '../assets/pomegranate.jpg';
import MangoImage from '../assets/mango.jpg';
import OrangeFruitImage from '../assets/orange-fruit.jpg';
import DurianImage from '../assets/durian.jpg';
import WatermelonImage from '../assets/watermelon.jpg';

export const topSellingProducts = [
  {
    id: 'ts1',
    title: 'Fresh Organic Carrots Bundle',
    category: 'Vegetables',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: CarrotsImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 25
  },
  {
    id: 'ts2',
    title: 'Bell Pepper Mix Red Green Yellow',
    category: 'Vegetables',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: BellPeppersImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 13
  },
  {
    id: 'ts3',
    title: 'Fresh Mango Basket Premium Quality',
    category: 'Fresh Fruit',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: MangoImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 19
  },
  {
    id: 'ts4',
    title: 'Sweet Watermelon Slices Fresh Cut',
    category: 'Fresh Fruit',
    currentPrice: 28.50,
    oldPrice: 31.0,
    imageUrl: WatermelonImage,
    rating: 4.5,
    ratingCount: 4.5,
    stock: 15
  },
  {
    id: 'ts5',
    title: 'Pomegranate Fresh Antioxidant Rich',
    category: 'Fresh Fruit',
    currentPrice: 35.00,
    oldPrice: 38.0,
    imageUrl: PomegranateImage,
    rating: 4.8,
    ratingCount: 4.8,
    stock: 22
  }
];

export const trendingProducts = [
  {
    id: 'tr1',
    title: 'Fresh Banana Bunch Organic',
    category: 'Fresh Fruit',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: BananaImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 30
  },
  {
    id: 'tr2',
    title: 'Dried Mango Slices Premium Fat Free',
    category: 'Snack',
    currentPrice: 32.85,
    oldPrice: 55.8,
    imageUrl: MangoImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 8
  },
  {
    id: 'tr3',
    title: 'Durian Fresh King of Fruits',
    category: 'Fresh Fruit',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: DurianImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 4
  },
  {
    id: 'tr4',
    title: 'Fresh Avocado Organic Ripe',
    category: 'Vegetables',
    currentPrice: 24.50,
    oldPrice: 27.0,
    imageUrl: AvocadoImage,
    rating: 4.7,
    ratingCount: 4.7,
    stock: 18
  },
  {
    id: 'tr5',
    title: 'Orange Fresh Juicy with Vitamin C',
    category: 'Fresh Fruit',
    currentPrice: 19.90,
    oldPrice: 22.0,
    imageUrl: OrangeFruitImage,
    rating: 4.6,
    ratingCount: 4.6,
    stock: 20
  }
];

export const recentlyAddedProducts = [
  {
    id: 'ra1',
    title: 'Sweet Watermelon Slices Fresh Cut',
    category: 'Fresh Fruit',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: WatermelonImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 12
  },
  {
    id: 'ra2',
    title: 'Organic Quinoa Grain Premium',
    category: 'Cereals',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: VeggiePopsImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 17
  },
  {
    id: 'ra3',
    title: 'Sweet Corn Fresh Organic Cobs',
    category: 'Vegetables',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: CornImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 21
  },
  {
    id: 'ra4',
    title: 'Fresh Organic Carrots Bundle',
    category: 'Vegetables',
    currentPrice: 32.85,
    oldPrice: 35.0,
    imageUrl: CarrotsImage,
    rating: 4.3,
    ratingCount: 4.3,
    stock: 14
  },
  {
    id: 'ra5',
    title: 'Bell Pepper Mix Red Green Yellow',
    category: 'Vegetables',
    currentPrice: 29.90,
    oldPrice: 32.0,
    imageUrl: BellPeppersImage,
    rating: 4.2,
    ratingCount: 4.2,
    stock: 11
  }
];

export const topRatedProducts = [
  {
    id: 'trt1',
    title: 'Pomegranate Fresh Antioxidant Rich',
    category: 'Fresh Fruit',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: PomegranateImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 15
  },
  {
    id: 'trt2',
    title: 'Fresh Avocado Organic Ripe',
    category: 'Vegetables',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: AvocadoImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 9
  },
  {
    id: 'trt3',
    title: 'Orange Fresh Juicy with Vitamin C',
    category: 'Fresh Fruit',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: OrangeFruitImage,
    rating: 4.0,
    ratingCount: 4.0,
    stock: 28
  },
  {
    id: 'trt4',
    title: 'Fresh Banana Bunch Organic',
    category: 'Fresh Fruit',
    currentPrice: 18.50,
    oldPrice: 21.0,
    imageUrl: BananaImage,
    rating: 4.9,
    ratingCount: 4.9,
    stock: 24
  },
  {
    id: 'trt5',
    title: 'Fresh Mango Basket Premium Quality',
    category: 'Fresh Fruit',
    currentPrice: 34.00,
    oldPrice: 36.5,
    imageUrl: MangoImage,
    rating: 4.8,
    ratingCount: 4.8,
    stock: 16
  }
];

export const allProducts = [
  ...mockProducts,
  ...topSellingProducts,
  ...trendingProducts,
  ...recentlyAddedProducts,
  ...topRatedProducts,
];
