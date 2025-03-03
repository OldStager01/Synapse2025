"use client";

import { useState, ReactNode } from "react";
import { AppContext } from "./appContext";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  return (
    <AppContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </AppContext.Provider>
  );
}
