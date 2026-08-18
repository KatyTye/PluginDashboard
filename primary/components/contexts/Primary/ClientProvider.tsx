"use client";

import React, { createContext, useContext } from "react";

type PrimaryContextType = { downloadsData: any };

export const PrimaryContext = createContext<PrimaryContextType | undefined>(undefined);

export function usePrimaryContext() {
  const ctx = useContext(PrimaryContext);
  if (!ctx) throw new Error("usePrimaryContext must be used within PrimaryProvider");
  return ctx;
}

export default function ClientPrimaryProvider({ children, downloadsData }: { children: React.ReactNode; downloadsData: any; }) {
  return (
    <PrimaryContext value={{ downloadsData }}>
      {children}
    </PrimaryContext>
  );
}