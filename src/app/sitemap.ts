import { SITE_URL } from '@/constants';
import menuParaEmpresas from "@/data/para-empresas/menu.json";
import menuParaVc from "@/data/para-vc/menu.json";
import type { MetadataRoute } from 'next';

const linksFromFiles = [...menuParaVc, ...menuParaEmpresas] as Array<{ url: string }>;

const urlsFromMenu = [
  linksFromFiles.filter(item => item.url !== "/").map(item => ({
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
