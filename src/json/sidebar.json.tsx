import React from "react";
import Image from "next/image";
import { SidebarLinksProps } from "@/utils/types/types";
import mastersLogo from "@/assets/icons/sidebar/masters.svg";
import houseIcons from "@/assets/svg/house_icons.svg"
import { ROLES } from "@/utils/userRoles/user";

export const sidebarLinks: SidebarLinksProps = {
  modules: [
    {
      moduleName: "Home",
      icon: (
        <Image
          src={houseIcons}
          alt="home"
          width={25}
          height={25}
        />
      ),
      path: "/home",
      roles:[ROLES.ALL]
    },
    {
      moduleName: "Home",
      icon: (
        <Image
          src={houseIcons}
          alt="home"
          width={25}
          height={25}
        />
      ),
      path: "/admin/home",
      roles:[ROLES.ADMIN]
    },
    {
      moduleName: "All Tests",
      icon: (
        <Image
          src={houseIcons}
          alt="home"
          width={25}
          height={25}
        />
      ),
      path: "/admin/all-tests",
      roles:[ROLES.ADMIN]
    },
    {
      moduleName: "Question Types",
      icon: (
        <Image
          src={houseIcons}
          alt="home"
          width={25}
          height={25}
        />
      ),
      path: "/admin/question-types",
      roles:[ROLES.ADMIN]
    },
    {
      moduleName: "Existing Users",
      icon: (
        <Image
          src={houseIcons}
          alt="home"
          width={25}
          height={25}
        />
      ),
      path: "/admin/users",
      roles:[ROLES.ADMIN]
    },
    {
      moduleName: "My Purchased",
      icon: (
        <Image
          src={mastersLogo}
          alt="my-purchased"
          width={25}
          height={25}
        />
      ),
      path: "/my-purchased",
      roles:[ROLES.ALL]
      // subModules: [
      //   {
      //     moduleName: "Receipt Register",
      //     path: "/revenue-collection/receipt-register",
      //   },
      // ],
    },
    {
      moduleName: "All Sets",
      icon: (
        <Image
          src={mastersLogo}
          alt="all-sets"
          width={25}
          height={25}
        />
      ),
      path: "/all-sets",
      roles:[]
    },
    {
      moduleName: "Settings",
      icon: (
        <Image
          src={mastersLogo}
          alt="settings"
          width={25}
          height={25}
        />
      ),
      path: "/settings",
      roles:[]
    },
  ],
};
