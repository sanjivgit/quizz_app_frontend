"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BottomNavLinks } from "@/json/bottomNav.json";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface BottomNavProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

const BottomNav: React.FC<BottomNavProps> = (props) => {
  const pathName = usePathname();
  const router = useRouter();
  const [data, setData] = useState<string | null>();
  const userData = useSelector((state: any) => state.user.user?.userDetails);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    setData(localStorage.getItem("openPage"));
    setUser(userData);
  }, []);
  const handleClick = (moduleName: string) => {
    localStorage.setItem("openPage", moduleName);
  };

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  return (
    <div {...props}>
      <section className="my-1 flex items-center justify-between">
        {BottomNavLinks.modules?.map((link, index: number) => {
          return (
            <React.Fragment key={index}>
              <Link href={link.path}>
                <div
                  className={`${
                    pathName.startsWith(link.path)
                      ? " bg-primary_bg"
                      : " bg-transparent text-zinc-600"
                  } whitespace-nowrap text-[0.9375rem] flex flex-col items-center justify-center p-1 rounded-md hover:bg-primary_bg hover:text-white font-semibold text-white`}
                >
                  <i className="w-6 rounded-md p-1 bg-primary_bg">
                    {link.icon}
                  </i>
                  <span className="text-[10px]">{link.moduleName}</span>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default BottomNav;
