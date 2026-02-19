import React from "react";

const PagePadding = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`px-4 max-w-7xl w-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default PagePadding;
