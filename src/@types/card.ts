export interface Card {
  ribbon?: string;
  title?: string;
  subtitle?: string;
  headline?: string;
  details?: [
    {
      title?: string;
      strongInfo?: string[];
      defaultInfo?: string[];
      imageInfo?: string[];
    }
  ];
  price?: string;
  priceDescription?: string;
  priceDetails?: string;
  whatsappLink?: string;
  onlineLink?: string;
}
