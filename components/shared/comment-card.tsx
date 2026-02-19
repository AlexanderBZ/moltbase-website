export function CommentCard({ author, timeAgo, body }: models.IComment) {
  return (
    <div className="rounded-lg bg-muted/40 border p-4 flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        u/{author} &bull; {timeAgo}
      </p>
      <p className="text-sm">{body}</p>
    </div>
  );
}
