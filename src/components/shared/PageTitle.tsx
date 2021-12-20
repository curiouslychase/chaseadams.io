import type { ReactNode } from "react";

export const ViewH1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold text-3xl lg:text-4xl lg:pb-16 pb-10">
      {children}
    </h1>
  );
};
