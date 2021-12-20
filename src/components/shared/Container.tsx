import type { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] lg:mx-auto  xl:py-[80px] xl:px-[120px] lg:py-[60px] lg:px-[40px] py-[40px] px-[30px]">
      {children}
    </div>
  );
};
