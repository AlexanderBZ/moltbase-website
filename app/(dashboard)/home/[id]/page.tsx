import { notFound } from "next/navigation";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound();
  }
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
