export type CMSComponentType = "hero-banner" | "offer-grid";

export interface CMSComponentProps {
  id: string;
  resourceType: CMSComponentType;
  props: any;
}

export interface CMSPageData {
  title: string;
  components: CMSComponentProps[];
}
