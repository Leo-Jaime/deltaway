import { LucideIcon } from 'lucide-react';

export type PageView = 'HOME' | 'ABOUT' | 'PRODUCTS' | 'SUPPORT' | 'CONTACT';

export interface NavItem {
  label: string;
  view: PageView;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface ProductParam {
    category: string;
    items: string[];
    image:string;
    icon: LucideIcon;
}