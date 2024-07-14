"use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "../global/layout/Header";
import Sidebar from "../global/layout/Sidebar";
import Loading from "./Loading";
const BottomNav = dynamic(() => import("../global/layout/BottomNav"), { ssr: false });
import { useUser } from "../global/molecules/general/useUser";
import dynamic from "next/dynamic";

interface PageLayoutProps {
  children: React.ReactNode;
}
// style={{ zoom: "80%" }}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const user = useUser()
  const [width, setWidth] = useState(550);

  useEffect(() => {
    if (typeof window !== "undefined") {
    const windowSizeHandler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }
  }, []);

  const handleToggle = () => {
    // localStorage.setItem("openPage", String(!isExpanded))
    setIsExpanded(!isExpanded);
  };
  // max-sm:hidden max-md:hidden
  return (
    <>
      <main>
        <Suspense fallback={<Loading />}>
          <div className="h-screen overflow-y-hidden">
            <Header onClick={handleToggle} />
            <div className="flex mb-4">
              <Sidebar
                className={`hide-scrollbar shadow-lg border-r w-2/6 overflow-y-auto overflow-x-hidden z-50 transition-all duration-500 ease-in-out ${
                  !isExpanded
                    ? "w-[0]"
                    : "max-tmp:absolute max-tmp:bg-white  max-md:w-2/4 max-sm:w-2/3 max-xs:w-full"
                }`}
              />
              <section
                style={{
                  height: `${
                    width <= 550
                      ? "calc(100vh - 7rem)"
                      : "calc(100vh - 3.5rem)"
                  }`,
                }}
                className="hide-scrollbar w-full overflow-y-auto bg-white p-5"
              >
                {children}
              </section>
            </div>
            {width <= 550 && (
              <BottomNav className="bg-white h-14 w-full border-t sticky bottom-0 shadow-md px-4"/>
            )}
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default PageLayout;

// !user?.isUserAdmin &&