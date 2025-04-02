"use client";
import { useApp } from "@/context/useApp";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import ShiftTabs, {
  Button as ShiftButton,
} from "./animata/container/shift-tabs";

export const MIBCSLogo = () => {
  return (
    // <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    //   <path
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill="white"
    //     fillRule="evenodd"
    //   />
    // </svg>
    // <div className="text-2xl font-bold text-white bg-red-500 px-2 py-1 font-bold">
    //   MIBCS
    // </div>
    <img src="/images/LOGO.webp" alt="MIBCS Logo" className="w-24 mb-3 mt-3" />
  );
};

export default function NavbarComponent() {
  const { isAnimating } = useApp();
  type navItemType = {
    title: string;
    href: string;
  };

  const navItems: navItemType[] = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Events",
      href: "#events",
    },
    {
      title: "Gallery",
      href: "#gallery",
    },
    {
      title: "Team",
      href: "#team",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    // <div className={`w-full z-[99] ${isAnimating ? "hidden" : ""}`}>
    <div className={`w-full z-[99]`}>
      <Navbar
        disableAnimation
        className="bg-transparent pt-1"
        maxWidth="lg"
        position="sticky"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle className="text-white " />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <MIBCSLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarBrand>
            <MIBCSLogo />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <ShiftTabs items={navItems} />
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex ml-8">
            <div className="flex items-center gap-6 mt-2">
              <img
                src="/images/MIBCSSymbol.png"
                alt="KKW Logo"
                className="w-14"
              />
              <img src="/images/KKWLogo.png" alt="KKW Logo" className="w-20" />
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mt-7 bg-transparent">
          <ShiftTabs items={navItems} />
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
