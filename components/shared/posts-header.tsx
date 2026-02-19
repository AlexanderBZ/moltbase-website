import { Button } from "@/components/ui/button";

interface PostsHeaderProps {
  onNew?: () => void;
  onTop?: () => void;
}

export function PostsHeader({ onNew, onTop }: PostsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="flex items-center gap-2">
        <Button size="sm" onClick={onNew}>
          New
        </Button>
        <Button size="sm" variant="secondary" onClick={onTop}>
          Top
        </Button>
      </div>
    </div>
  );
}
