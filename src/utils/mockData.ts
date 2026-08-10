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
    ratingCount: 4.0
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
    ratingCount: 4.0
  },
  {
    id: '7',
    title: 'Canada Dry Ginger Ale - 2 L Bottle',
    category: 'Meats',
    currentPrice: 32.85,
    oldPrice: 33.80,
    imageUrl: PistachioButterImage,
    rating: 4.0,
    ratingCount: 4.0
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
    ratingCount: 2.0
  }
];

import CarrotsImage from '../assets/Carrots.svg';
import BananaImage from '../assets/banana.svg';
import AvocadoImage from '../assets/Avocado.svg';
import CornImage from '../assets/corn.svg';
import QuinoeImage from '../assets/OrganicQuinoeIcon.svg';
import BellPeppersImage from '../assets/bell-peppers.jpg';
import PomegranateImage from '../assets/pomegranate.jpg';
import MangoImage from '../assets/mango.jpg';
import OrangeFruitImage from '../assets/orange-fruit.jpg';
import DurianImage from '../assets/durian.jpg';
import DriedMangoImage from '../assets/dried-mango.jpg';
import WatermelonImage from '../assets/watermelon.jpg';

export const topSellingProducts = [
  {
    id: 'ts1',
    title: 'Fresh Organic Carrots Bundle',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: CarrotsImage,
    rating: 4.0
  },
  {
    id: 'ts2',
    title: 'Bell Pepper Mix Red Green Yellow',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: BellPeppersImage,
    rating: 4.0
  },
  {
    id: 'ts3',
    title: 'Fresh Mango Basket Premium Quality',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: MangoImage,
    rating: 4.0
  }
];

export const trendingProducts = [
  {
    id: 'tr1',
    title: 'Fresh Banana Bunch Organic',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: BananaImage,
    rating: 4.0
  },
  {
    id: 'tr2',
    title: 'Dried Mango Slices Premium Fat Free',
    currentPrice: 32.85,
    oldPrice: 55.8,
    imageUrl: DriedMangoImage,
    rating: 4.0
  },
  {
    id: 'tr3',
    title: 'Durian Fresh King of Fruits',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: DurianImage,
    rating: 4.0
  }
];

export const recentlyAddedProducts = [
  {
    id: 'ra1',
    title: 'Sweet Watermelon Slices Fresh Cut',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: WatermelonImage,
    rating: 4.0
  },
  {
    id: 'ra2',
    title: 'Organic Quinoa Grain Premium',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: QuinoeImage,
    rating: 4.0
  },
  {
    id: 'ra3',
    title: 'Sweet Corn Fresh Organic Cobs',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: CornImage,
    rating: 4.0
  }
];

export const topRatedProducts = [
  {
    id: 'trt1',
    title: 'Pomegranate Fresh Antioxidant Rich',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: PomegranateImage,
    rating: 4.0
  },
  {
    id: 'trt2',
    title: 'Fresh Avocado Organic Ripe',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: AvocadoImage,
    rating: 4.0
  },
  {
    id: 'trt3',
    title: 'Orange Fresh Juicy with Vitamin C',
    currentPrice: 32.85,
    oldPrice: 33.8,
    imageUrl: OrangeFruitImage,
    rating: 4.0
  }
];
