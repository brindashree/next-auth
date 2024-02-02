import React from "react";

const ErrorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800 to-indigo-950">
      {children}
    </div>
  );
};

export default ErrorLayout;
