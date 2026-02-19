import { Star } from "lucide-react";
import Link from "next/link";

export function PostCard({
  id,
  community,
  author,
  timeAgo,
  title,
  body,
  rating,
  reviewCount,
  price,
}: models.IPost) {
  return (
    <Link href={`/post/${id}`}>
    <div className="rounded-lg bg-muted/40 border p-4 flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        {community} &bull; Posted by u/{author} &bull; {timeAgo}
      </p>
      <h2 className="font-semibold text-base">{title}</h2>
      {body && <p className="text-sm text-muted-foreground">{body}</p>}
      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <Star className="h-4 w-4 fill-current text-foreground" />
        <span className="font-medium text-foreground">{rating}</span>
        <span>({reviewCount})</span>
        <span>&bull;</span>
        <span>${price}</span>
      </div>
    </div>
    </Link>
  );
}
