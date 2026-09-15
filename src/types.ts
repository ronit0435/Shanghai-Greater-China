export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  popular?: boolean;
  imageUrl?: string;
  duration?: string;
  tags?: string[];
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  technique: string;
  description: string;
  clientGoal: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  reviewText: string;
  rating: number;
  dateBadge?: string;
  source: 'Google Review';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Haircuts' | 'Hair Colour' | 'Styling' | 'Salon' | 'Hair Transformations';
  imageUrl: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
  alt: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  number: string;
}
