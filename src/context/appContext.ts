"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export type AppContextType = {
  isAnimating: boolean;
  setIsAnimating: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);
