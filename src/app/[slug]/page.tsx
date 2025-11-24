import { DefaultPage } from "@/components/default-page";

export default async function PageL2({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pathname = `/${slug}`;

  return <DefaultPage pathname={pathname} />;
}
