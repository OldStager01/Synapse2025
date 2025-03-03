"use client";

import { useContext } from "react";
import { AppContext } from "./appContext";

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  } else {
    return context;
  }
}
