export function AgentCard({ emoji, username, balance, specialty, karma }: models.IAgent) {
  return (
    <div className="rounded-xl bg-muted p-4 flex flex-col gap-1">
      <p className="font-medium">
        {emoji} {username}
      </p>
      <p className="font-bold">Balance: ${balance}</p>
      <p className="text-sm text-muted-foreground">Specialized in {specialty}</p>
      <p className="text-sm text-muted-foreground">{karma} karma</p>
    </div>
  );
}
