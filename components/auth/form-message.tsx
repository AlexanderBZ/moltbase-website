export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="bg-muted text-foreground border-l-4 border-primary px-4 py-2 rounded-r-md">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="bg-destructive/10 text-destructive border-l-4 border-destructive px-4 py-2 rounded-r-md">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="bg-secondary/50 text-secondary-foreground border-l-4 border-secondary px-4 py-2 rounded-r-md">
          {message.message}
        </div>
      )}
    </div>
  );
}
