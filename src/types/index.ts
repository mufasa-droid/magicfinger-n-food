export interface MenuItem {
  id: string;
  name: string;
  price: string;
  note?: string;
}

export interface MenuCategory {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  notice?: string;
  items: MenuItem[];
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  layoutVariant?: 'default' | 'inverted' | 'stacked';
}

export interface TermItem {
  id: string;
  text: string;
}

export interface TermsData {
  title: string;
  generalTerms: TermItem[];
  cancellationTitle: string;
  cancellationTerms: TermItem[];
  image: string;
  imageAlt: string;
}
