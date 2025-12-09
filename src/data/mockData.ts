import { MagazineIssue, Subscription, FeaturedArticle } from '@/types/magazine';

export const magazineIssues: MagazineIssue[] = [
  {
    id: '1',
    title: 'Winter Dreams',
    issueNumber: 24,
    date: new Date('2024-12-01'),
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop',
    pages: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1100&fit=crop',
    ],
    description: 'Explore the serene beauty of winter landscapes and cozy moments.',
  },
  {
    id: '2',
    title: 'Autumn Elegance',
    issueNumber: 23,
    date: new Date('2024-11-01'),
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    pages: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=1100&fit=crop',
    ],
    description: 'The golden hues of fall captured in stunning photography.',
  },
  {
    id: '3',
    title: 'Summer Vibes',
    issueNumber: 22,
    date: new Date('2024-10-01'),
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
    pages: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1100&fit=crop',
    ],
    description: 'Sun-kissed adventures and tropical escapes.',
  },
  {
    id: '4',
    title: 'Spring Awakening',
    issueNumber: 21,
    date: new Date('2024-09-01'),
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=800&fit=crop',
    pages: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1100&fit=crop',
    ],
    description: 'Nature blooms with vibrant colors and fresh beginnings.',
  },
  {
    id: '5',
    title: 'Urban Stories',
    issueNumber: 20,
    date: new Date('2024-08-01'),
    coverImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=800&fit=crop',
    pages: [
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=1100&fit=crop',
    ],
    description: 'City life through the lens of contemporary photography.',
  },
  {
    id: '6',
    title: 'Coastal Dreams',
    issueNumber: 19,
    date: new Date('2024-07-01'),
    coverImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=800&fit=crop',
    pages: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1100&fit=crop',
    ],
    description: 'Ocean waves and seaside tranquility.',
  },
];

export const subscriptions: Subscription[] = [
  {
    id: 'single',
    name: 'Single Issue',
    price: 9.99,
    period: 'single',
    description: 'Purchase any individual issue',
    features: [
      'Access to one complete issue',
      'High-resolution images',
      'Downloadable PDF',
      'Lifetime access to purchased issue',
    ],
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: 14.99,
    period: 'monthly',
    description: 'New issue delivered every month',
    features: [
      'New issue every month',
      'Access to current month archive',
      'High-resolution images',
      'Early access to new releases',
      'Cancel anytime',
    ],
    popular: true,
  },
  {
    id: 'yearly',
    name: 'Annual',
    price: 99.99,
    period: 'yearly',
    description: 'Best value - save over 40%',
    features: [
      'All 12 issues per year',
      'Complete archive access',
      'High-resolution downloads',
      'Exclusive subscriber content',
      'Early access to all releases',
      'Priority customer support',
    ],
  },
];

export const featuredArticles: FeaturedArticle[] = [
  {
    id: '1',
    title: 'The Art of Winter Photography',
    subtitle: 'Capturing the magic of snow-covered landscapes',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1200&h=600&fit=crop',
    issueId: '1',
    issueNumber: 24,
  },
  {
    id: '2',
    title: 'Golden Hour Secrets',
    subtitle: 'Master the perfect autumn light',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    issueId: '2',
    issueNumber: 23,
  },
  {
    id: '3',
    title: 'Mountain Escapes',
    subtitle: 'Journey through breathtaking peaks',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=600&fit=crop',
    issueId: '3',
    issueNumber: 22,
  },
  {
    id: '4',
    title: 'Forest Mystique',
    subtitle: 'Exploring enchanted woodland paths',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=600&fit=crop',
    issueId: '4',
    issueNumber: 21,
  },
  {
    id: '5',
    title: 'Ocean Horizons',
    subtitle: 'Where sky meets sea in perfect harmony',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=600&fit=crop',
    issueId: '6',
    issueNumber: 19,
  },
];
