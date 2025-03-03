"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href: string;
  item: string;
  index?: number;
  activeIndex: number;
  onTabClick: () => void;
}

export const Button = ({
  item,
  href,
  index,
  activeIndex,
  onTabClick,
}: ButtonProps) => {
  return (
    <div
      className={cn("rounded-lg bg-red-500", {
        "border-b-2 border-b-red-500": index === activeIndex,
      })}
      onClick={onTabClick}
    >
      <div
        className={cn(
          "flex h-10 cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 transition-all",
          {
            "border-2 border-red-500 text-red-700": index === activeIndex,
            "origin-top-right text-black ease-in hover:rotate-6":
              index !== activeIndex,
          }
        )}
      >
        <Link href={href}>
          <p className="p-2 text-center font-mono">{item}</p>
        </Link>
      </div>
    </div>
  );
};

export default function ShiftTabs({ items }: { items: any[] }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {items.map((item, index) => (
        <Button
          onTabClick={() => {
            setActiveTab(index);
          }}
          item={item.title}
          href={item?.href}
          activeIndex={activeTab}
          index={index}
          key={`shift_tab_${index}`}
        />
      ))}
    </>
  );
}
