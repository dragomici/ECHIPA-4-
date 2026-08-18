export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const aboutPageContent = {
  hero: {
    badge: 'About Us',
    title: 'Fresh & Healthy Groceries Delivered to Your Doorstep',
    subtitle: 'We connect local organic farmers with conscious consumers, making wholesome food accessible and affordable for everyone.'
  },
  mission: {
    title: 'Our Mission',
    tagline: 'Cultivating a healthier world through sustainable food.',
    description: 'We believe that proper nutrition begins with respect for nature. Our mission is to transform everyday grocery shopping into a seamless, sustainable experience while championing local organic agriculture and reducing food waste across the supply chain.'
  },
  vision: {
    title: 'Our Vision',
    description: 'To become the most trusted fresh food platform globally, empowering millions of households to eat clean, live sustainably, and support thriving local farming communities.'
  },
  values: [
    {
      id: 'val-1',
      title: '100% Organic & Fresh',
      description: 'We partner directly with certified organic producers to ensure every item meets the highest quality and freshness standards.',
      iconName: 'leaf'
    },
    {
      id: 'val-2',
      title: 'Fair Trade & Transparency',
      description: 'We guarantee fair compensation for all our partnering farmers and full traceability for every single product on our shelves.',
      iconName: 'shield-check'
    },
    {
      id: 'val-3',
      title: 'Eco-Friendly Deliveries',
      description: 'From biodegradable packaging to optimized routing, our operations are carefully designed to minimize carbon emissions.',
      iconName: 'truck'
    },
    {
      id: 'val-4',
      title: 'Customer-First Care',
      description: 'Your satisfaction and well-being are at the core of everything we do, backed by effortless returns and 24/7 dedicated support.',
      iconName: 'heart'
    }
  ] as CompanyValue[],
  stats: [
    { label: 'Active Customers', value: '50k+' },
    { label: 'Organic Farmers', value: '120+' },
    { label: 'Fresh Products', value: '2.5k+' },
    { label: 'Satisfied Deliveries', value: '99%' }
  ],
  team: [
    {
      id: 'tm-1',
      name: 'Elena Vancea',
      role: 'Founder & CEO',
      bio: 'Lifelong advocate for sustainable agriculture with over 12 years of executive experience in supply chain optimization.',
      avatarUrl: '/assets/team/elena.jpg'
    },
    {
      id: 'tm-2',
      name: 'Mihai Radu',
      role: 'Head of Sourcing & Farming Partnerships',
      bio: 'Agronomist dedicated to bridging the gap between independent organic growers and modern digital commerce.',
      avatarUrl: '/assets/team/mihai.jpg'
    },
    {
      id: 'tm-3',
      name: 'Sofia Dumitrescu',
      role: 'Chief Quality & Sustainability Officer',
      bio: 'Food scientist ensuring strict compliance with organic certifications and overseeing zero-waste packaging initiatives.',
      avatarUrl: '/assets/team/sofia.jpg'
    },
    {
      id: 'tm-4',
      name: 'Alexandru Popa',
      role: 'VP of Customer Experience',
      bio: 'Passionate about building community-driven platforms that deliver fast, delightful, and personalized grocery experiences.',
      avatarUrl: '/assets/team/alexandru.jpg'
    }
  ] as TeamMember[]
};