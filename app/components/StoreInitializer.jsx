"use client";

import { useEffect } from "react";
import { useEcommerceStore } from "@/app/store/Auth";

export function StoreInitializer({ children }) {
  const { initializeAuth, isAuth } = useEcommerceStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return <>{children}</>;
}
