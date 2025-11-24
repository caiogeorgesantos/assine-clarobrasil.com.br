import { DefaultPage } from "@/components/default-page";

export default async function PageL3({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}) {
  const { slug, subSlug } = await params;
  const pathname = `/${slug}/${subSlug}`;

  return <DefaultPage pathname={pathname} />;
}
