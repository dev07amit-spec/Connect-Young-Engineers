"use client";

import { useEffect } from "react";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=63072000; SameSite=Lax`;
}

function getOrCreateFbc(): string | null {
  let fbc = getCookie("_fbc");

  // If not found, check for fbclid in URL
  if (!fbc && typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get("fbclid");
    if (fbclid) {
      fbc = `fb.1.${Date.now()}.${fbclid}`;
      setCookie("_fbc", fbc);
    }
  }

  return fbc;
}

function getOrCreateFbp(): string | null {
  let fbp = getCookie("_fbp");
  if (!fbp && typeof window !== "undefined") {
    // Generate pseudo fbp if missing
    const random = Math.random().toString(36).substring(2, 10);
    fbp = `fb.1.${Date.now()}.${random}`;
    setCookie("_fbp", fbp);
  }
  return fbp;
}

export function useFacebookPixel() {
  useEffect(() => {
    // Ensure cookies exist once user lands
    getOrCreateFbc();
    getOrCreateFbp();
  }, []);

  const getFbcFbp = () => {
    return {
      fbc: getCookie("_fbc"),
      fbp: getCookie("_fbp"),
    };
  };

  const trackLead = (params?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      const { fbc, fbp } = getFbcFbp();
      (window as any).fbq("track", "Lead", { ...params, fbc, fbp });
    }
  };

  const trackPageView = () => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "PageView");
    }
  };

  return { trackLead, trackPageView, getFbcFbp };
}
