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
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
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
    <div className={`w-full z-[99] `}>
      <Navbar
        disableAnimation
        isBordered
        className="bg-transparent"
        maxWidth="lg"
        position="sticky"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle className="text-white " />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <MIBCSLogo />
            <p className="font-bold text-white">MIBCS</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarBrand>
            <MIBCSLogo />
            <p className="font-bold text-inherit text-white">MIBCS</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <ShiftTabs items={navItems} />
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-white">
              IDEA LAB LOGO
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mt-7 bg-transparent">
          <ShiftTabs items={navItems} />
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
