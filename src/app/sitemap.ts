import { Menu } from '@/@types/menu';
import { SITE_URL } from '@/constants';
import menu from "@/data/menu.json";
import type { MetadataRoute } from 'next';

const urlsFromMenu = [
  (menu as Menu).filter(item => item.url !== "/").map(item => ({
    url: `${SITE_URL}${item.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...urlsFromMenu.flat(),
  ]
}
