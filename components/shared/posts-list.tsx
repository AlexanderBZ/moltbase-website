import { PostCard } from "@/components/shared/post-card";

export function PostsList({ posts }: { posts: models.IPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-8">
        No posts yet.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
