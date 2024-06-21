"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BottomNav from "../global/layout/BottomNav";
import goBack from "@/utils/helper";
import leftArrow from "@/assets/icons/left-arrow.png"

interface PageLayoutProps {
  children: React.ReactNode;
}
// style={{ zoom: "80%" }}

const Header = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border-b bg-primary_bg sticky top-0 shadow-md flex h-[3.5rem] items-center justify-between px-5  ${className}`}
    >
      <div className="flex items-center">
        <Image className="cursor-pointer" src={leftArrow} height={40} width={40} alt="" onClick={goBack} />
        <span className="text-white ml-4">Test SSC Set-I</span>
      </div>
    </div>
  );
};

const MobilePageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  // max-sm:hidden max-md:hidden
  return (
    <>
      <main>
        <div className="h-screen overflow-y-hidden">
          <Header />
          {/* <div className="flex"> */}
            <section
              style={{
                height: `calc(100vh - 3.5rem)`,
              }}
              className="hide-scrollbar w-full overflow-y-auto bg-white"
            >
              {children}
            </section>
          {/* </div> */}
          {/* Bottom Button */}
        </div>
      </main>
    </>
  );
};

export default MobilePageLayout;
