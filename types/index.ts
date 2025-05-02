// types/index.ts
export interface FeatureItem {
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
