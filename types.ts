import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  id: string;
  bulletPoints: string[];
  ctaText: string;
}