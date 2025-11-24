export interface Section {
  context: string[];
  title: string;
  subtitle: string;
  tabs: SectionTab[];
}

export interface SectionTab {
  title: string;
  cards: SectionCard[];
}

export interface SectionCard {
  ribbon?: string;
  title: string;
  subtitle: string;
  headline: string;
  details: SectionDetail[];
  price: string;
  priceDescription: string;
  priceDetails: string;
  whatsappLink: string;
  onlineLink: string;
}

export interface SectionDetail {
  title: string;
  strongInfo: string[];
  defaultInfo: string[];
  imageInfo: string[];
}

export type Sections = Section[];
