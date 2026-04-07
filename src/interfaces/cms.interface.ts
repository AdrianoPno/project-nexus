export interface Offer {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  isHighlight?: boolean;
}

export type CMSComponentType = "hero-banner" | "offer-grid" | "faq-accordion";

export interface CMSComponentProps {
  id: string;
  resourceType: CMSComponentType;
  props: any;
}

export interface CMSPageData {
  title: string;
  components: CMSComponentProps[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  links: NavLink[];
}
