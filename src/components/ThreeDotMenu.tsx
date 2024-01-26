"use client";

import {
  Bell,
  Download,
  Headphones,
  LucideIcon,
  Megaphone,
  MoreVertical,
} from "lucide-react";
import React, { useState } from "react";

interface MenuItem {
  icon: LucideIcon;
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    icon: Bell,
    href: "/notification-preferences",
    title: "Notification preferences",
  },
  {
    icon: Headphones,
    href: "/support",
    title: "24x7 Customer Care",
  },
  {
    icon: Megaphone,
    href: "/advertize",
    title: "Advertize",
  },
  {
    icon: Download,
    href: "/download",
    title: "Download app",
  },
];

const ThreeDotMenu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
      className="relative flex gap-2 items-center cursor-pointer hover:bg-slate-200 rounded-md px-2 group"
    >
      <MoreVertical />
      {menu && (
        <div
          className="absolute top-full bg-white shadow flex flex-col rounded-lg right-1"
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
        >
          {/* TODO: use the hrefs */}
          <div className="flex flex-col py-2">
            {menuItems.map((menuItem, index) => (
              <div key={index} className="hover:bg-slate-100">
                <div className="flex gap-3 py-2 px-3 items-center">
                  <menuItem.icon className="w-4 h-4" />
                  <p className="text-nowrap">{menuItem.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    // <div className="flex items-center">
    //   <MoreVertical />
    // </div>
  );
};

export default ThreeDotMenu;
