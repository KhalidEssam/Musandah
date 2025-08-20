// /models/interfaces.ts

// Content Types
export type ContentType = 'article' | 'blog';

// User Roles
export type UserRole = 'admin' | 'editor' | 'client' | 'reader';

// Subscription Plan Types
export type PlanType = 'silver' | 'gold' | 'platinum';
export type SubscriptionStatus = 'active' | 'canceled' | 'expired' | 'trialing';

// Content Author Info
export interface Author {
  id: string;
  name: string;
}

// User Model
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  bio?: string;
  joinedAt: Date;
}

// Content Model
export interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  author: Author;
  tags: string[];
  publishedAt: Date;
  coverImage: string;
}

// Subscription Model
export interface Subscription {
  id: string;
  userId: string;
  plan: PlanType;
  status: SubscriptionStatus;
  startedAt: Date;
  expiresAt: Date;
  renewal: boolean;
  paymentProvider?: 'stripe' | 'paypal' | 'manual';
  paymentId?: string;
}

// Plan Model (optional, for dynamic plan pricing)
export interface Plan {
  id: PlanType;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
}

// Comment Model
export interface Comment {
  id: string;
  contentId: string;
  userId: string;
  text: string;
  createdAt: Date;
  parentId?: string;
  status: 'visible' | 'hidden' | 'deleted';
}
