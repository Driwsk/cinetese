import ButtonHome from "@/components/ui/buttonHome";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <>
      <div>teste {slug}</div>
      <div></div>
    </>
  );
}
