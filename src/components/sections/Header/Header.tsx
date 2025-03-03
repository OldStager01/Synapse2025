import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Header() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full p-4 text-center shadow-lg z-50">
      <div className="flex items-center justify-between ">{<Navbar />}</div>
    </div>
  );
}
