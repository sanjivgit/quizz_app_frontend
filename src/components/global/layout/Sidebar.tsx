"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/json/sidebar.json";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import profilePic from "@/assets/icons/profile2.png";
import Button from "../atoms/Button";
import { logout } from "@/redux/reducers/authReducer";
import { ROLES } from "@/utils/userRoles/user";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

const Sidebar: React.FC<SideBarProps> = (props) => {
  const pathName = usePathname();
  const router = useRouter();
  const [data, setData] = useState<string | null>();
  const userData = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    setData(localStorage.getItem("openPage"));
    setUser(userData);
  }, [userData]);
  const handleClick = (moduleName: string) => {
    localStorage.setItem("openPage", moduleName);
  };

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  const handleLogOut = () => {
    dispatch(logout());
    router.push("/auth/login");
  };

  return (
    <div style={{ height: "calc(100vh - 3.5rem)" }} {...props}>
      <div className="flex flex-col items-center justify-center mt-3">
        <Image src={profilePic} height={100} width={100} alt="profile-pic" />
        <h1 className="text-primary font-bold">Hiii, {user?.name.split(" ")[0]}</h1>
      </div>
      <section className="mt-3">
        {sidebarLinks.modules?.map((link, index: number) => {
          if (
            !link.roles ||
            (link.roles &&
              (!user?.is_admin
                ? link.roles.includes(ROLES.ALL)
                : link.roles.includes(ROLES.ADMIN)))
          )
            return (
              <div key={index}>
                <ul className="mb-3 p-0">
                  {link.subModules ? (
                    <li>
                      <details
                        open={data === link?.moduleName}
                        className="mr-3"
                      >
                        <summary
                          className={`${
                            pathName.startsWith(link.path)
                              ? " bg-primary_bg"
                              : " bg-transparent text-zinc-600"
                          } whitespace-nowrap flex items-center ml-2 text-[0.9375rem] p-1 pr-4 hover:bg-primary_bg hover:text-white font-semibold text-white`}
                        >
                          <i className="w-8 mr-2 rounded-md p-1.5 bg-primary_bg ">
                            {link.icon}
                          </i>
                          {link.moduleName}
                        </summary>
                        <ul>
                          {link.subModules?.map((sub: any, i: number) => {
                            if (
                              !sub.roles ||
                              (sub.roles &&
                                (!user?.is_admin
                                  ? sub.roles.includes("ALL")
                                  : sub.roles.includes("ADMIN")))
                            )
                              return (
                                <li
                                  onClick={() => handleClick(sub.moduleName)}
                                  key={i}
                                  className={`mt-3 ml-5`}
                                >
                                  <Link
                                    className={`text-[0.9375rem] p-2 ${
                                      pathName === link.path
                                        ? "text-black font-medium bg-primary_bg bg-opacity-20"
                                        : "text-primary"
                                    } `}
                                    href={link.path}
                                  >
                                    {link.moduleName}
                                  </Link>
                                </li>
                              );

                            return <></>;
                          })}
                        </ul>
                      </details>
                    </li>
                  ) : (
                    <Link href={link.path}>
                      <h2
                        className={`${
                          pathName.startsWith(link.path)
                            ? " bg-primary_bg"
                            : " bg-transparent text-zinc-600"
                        } whitespace-nowrap ml-2 mr-2 text-[0.9375rem] flex items-center p-1 pr-4 hover:bg-primary_bg hover:text-white font-semibold text-white`}
                      >
                        <i className="w-8 mr-2 rounded-md p-1.5 bg-primary_bg">
                          {link.icon}
                        </i>
                        {link.moduleName}
                      </h2>
                    </Link>
                  )}
                </ul>
              </div>
            );

          return <></>;
        })}
      </section>
      <hr className="border-1" />
      <Button onClick={handleLogOut} className="mt-3 ml-3" variant={"primary"}>
        Log Out
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M2.59436 12.1524H3.76145C3.84114 12.1524 3.91584 12.1872 3.96565 12.2487C4.08186 12.3898 4.20637 12.5259 4.33752 12.6554C4.87393 13.1923 5.50931 13.6202 6.20852 13.9155C6.93292 14.2214 7.71151 14.3784 8.49787 14.377C9.29309 14.377 10.0634 14.2209 10.7872 13.9155C11.4864 13.6202 12.1218 13.1923 12.6582 12.6554C13.1956 12.1203 13.6241 11.486 13.9199 10.7877C14.2271 10.0639 14.3815 9.29524 14.3815 8.50003C14.3815 7.70481 14.2254 6.93616 13.9199 6.21233C13.6244 5.5134 13.1994 4.8842 12.6582 4.34465C12.117 3.8051 11.4878 3.3801 10.7872 3.0846C10.0634 2.77913 9.29309 2.62307 8.49787 2.62307C7.70266 2.62307 6.93235 2.77747 6.20852 3.0846C5.50793 3.3801 4.87873 3.8051 4.33752 4.34465C4.20637 4.47581 4.08352 4.61194 3.96565 4.75139C3.91584 4.81282 3.83947 4.84768 3.76145 4.84768H2.59436C2.48977 4.84768 2.42502 4.73147 2.48313 4.64348C3.75647 2.66458 5.9844 1.35471 8.51613 1.36135C12.4939 1.37131 15.683 4.60032 15.6432 8.57307C15.6033 12.4827 12.4192 15.6387 8.49787 15.6387C5.97277 15.6387 3.75481 14.3305 2.48313 12.3566C2.42668 12.2686 2.48977 12.1524 2.59436 12.1524ZM1.11848 8.39544L3.47424 6.53606C3.56223 6.46633 3.69006 6.52942 3.69006 6.64065V7.90237H8.90295C8.976 7.90237 9.03576 7.96213 9.03576 8.03518V8.96487C9.03576 9.03792 8.976 9.09768 8.90295 9.09768H3.69006V10.3594C3.69006 10.4706 3.56057 10.5337 3.47424 10.464L1.11848 8.60462C1.1026 8.59219 1.08977 8.57632 1.08094 8.5582C1.07211 8.54008 1.06752 8.52018 1.06752 8.50003C1.06752 8.47987 1.07211 8.45997 1.08094 8.44185C1.08977 8.42373 1.1026 8.40786 1.11848 8.39544Z"
              fill="white"
            />
          </svg>
        </span>
      </Button>
    </div>
  );
};

export default Sidebar;
