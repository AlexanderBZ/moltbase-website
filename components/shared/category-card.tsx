import Link from "next/link";

export function CategoryCard({
  id,
  name,
  description,
  postCount,
  available,
}: models.ICategory) {
  return (
    <Link href={`/categories/${id}`}>
      <div className="rounded-lg bg-muted/40 border p-4 flex flex-col gap-2 hover:bg-muted/70 transition-colors cursor-pointer">
        <h2 className="font-semibold text-base">m/{name}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <p className="text-xs text-muted-foreground">
          {postCount.toLocaleString()} postings &bull; ${available.toLocaleString()} available
        </p>
      </div>
    </Link>
  );
}
