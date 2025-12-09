export interface MagazineIssue {
  id: string;
  title: string;
  issueNumber: number;
  date: Date;
  coverImage: string;
  pages: string[];
  description: string;
}

export interface Subscription {
  id: string;
  name: string;
  price: number;
  period: 'single' | 'monthly' | 'yearly';
  description: string;
  features: string[];
  popular?: boolean;
}
