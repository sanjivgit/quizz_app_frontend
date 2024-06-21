import React from "react";
import Image from "next/image";
import { SidebarLinksProps } from "@/utils/types/types";
import mastersLogo from "@/assets/icons/sidebar/masters.svg";
import houseIcons from "@/assets/svg/house_icons.svg"

export const BottomNavLinks: SidebarLinksProps = {
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
    },
    {
      moduleName: "My Purchased",
      icon: (
        <Image
          src={mastersLogo}
          alt="latest-jobs"
          width={25}
          height={25}
        />
      ),
      path: "/my-purchased",
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
          alt="sets"
          width={25}
          height={25}
        />
      ),
      path: "/all-sets",
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
      path: "/settings"
    },
  ],
};
