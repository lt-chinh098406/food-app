export interface FeatureSection {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
}

export const FEATURE_SECTIONS: FeatureSection[] = [
  {
    image: '/images/feature-1.webp',
    imageAlt: 'Create account screen',
    title: 'Create/login to an existing account to get started',
    subtitle: 'Create an account',
    description: 'An account is created with your email and a desired password',
    reverse: false,
  },
  {
    image: '/images/feature-2.webp',
    imageAlt: 'Explore screen',
    title: 'Shop for your favorites meal as e dey hot.',
    subtitle: 'Explore while shopping',
    description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
    reverse: true,
  },
  {
    image: '/images/feature-3.webp',
    imageAlt: 'Checkout screen',
    title: 'When you done check out and get it delivered.',
    subtitle: 'Checkout',
    description: 'When you done check out and get it delivered with ease.',
    reverse: false,
  },
];
