import React from "react";

function OrDivider() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <hr className="border-muted flex-1" />
      <span className="text-muted-foreground text-sm">OR</span>
      <hr className="border-muted flex-1" />
    </div>
  );
}

export default OrDivider;
