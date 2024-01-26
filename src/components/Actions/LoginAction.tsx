"use client";

import { PATH } from "@/constants";
import {
  Axe,
  ChevronDown,
  CircleUserRound,
  CreditCard,
  Gift,
  Heart,
  LucideIcon,
  Package,
  UserCircle,
} from "lucide-react";
import React, { useState } from "react";

interface MenuItem {
  icon: LucideIcon;
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    icon: CircleUserRound,
    href: PATH.account,
    title: "My profile",
  },
  {
    icon: Axe,
    href: PATH.plus,
    title: "Flipkart plus zone",
  },
  {
    icon: Package,
    href: PATH.orders,
    title: "Orders",
  },
  {
    icon: Heart,
    href: PATH.wishlist,
    title: "Wishlist",
  },
  {
    icon: Gift,
    href: PATH.rewards,
    title: "Rewards",
  },
  {
    icon: CreditCard,
    href: PATH.giftCards,
    title: "Gift cards",
  },
];

const LoginAction = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
      className="relative flex gap-2 items-center cursor-pointer hover:bg-primary rounded-md px-2 group"
    >
      <CircleUserRound
        className="font-thin group-hover:text-secondary"
        aria-hidden="true"
      />
      <span className="group-hover:text-secondary">Login</span>
      <div className="group-hover:rotate-180 duration-150">
        <ChevronDown
          aria-hidden="true"
          className="h-4 group-hover:text-secondary"
        />
      </div>
      {menu && (
        <div
          className="absolute top-full bg-white shadow flex flex-col rounded-lg"
          onMouseEnter={() => setMenu(true)}
          onMouseLeave={() => setMenu(false)}
        >
          <div className="divide-y">
            <div className="flex gap-8 p-2">
              <p className="text-lg text-nowrap">New customer?</p>
              <span className="text-lg text-nowrap font-bold text-primary">
                Sign up
              </span>
            </div>
            {/* TODO: use the hrefs */}
            <div className="flex flex-col py-2">
              {menuItems.map((menuItem, index) => (
                <div key={index} className="hover:bg-slate-100">
                  <div className="flex gap-3 py-2 px-3 items-center">
                    <menuItem.icon className="w-4 h-4" />
                    <p>{menuItem.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { LoginAction };
