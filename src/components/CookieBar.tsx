"use client";

import React from "react";
import { useTheme } from "@/components/ui/theme";
import { Button } from "@/components/ui/Button";

export default function CookieBar() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const status = localStorage.getItem("cookie-consent-status");
      setIsVisible(!status);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const closeWithStatus = (status: "accepted" | "denied" | "preferences") => {
    try {
      localStorage.setItem("cookie-consent-status", status);
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-3xl w-[92vw] rounded-xl p-4 shadow-lg border ${
        isDark
          ? "bg-neutral-900 text-white border-white/10"
          : "bg-white text-black border-black/10"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={isDark ? "text-sm text-white/80" : "text-sm text-black/80"}>
          By clicking “Accept”, you agree to cookies for navigation, usage analysis, and marketing.
        </p>
        <div className="flex gap-2">
          <Button
            as="button"
            variant="ghost"
            className={isDark ? "text-white! bg-transparent! hover:bg-white/10!" : "text-black! bg-transparent! hover:bg-black/10!"}
            onClick={() => closeWithStatus("preferences")}
          >
            Preferences
          </Button>
          <Button
            as="button"
            variant="ghost"
            className={isDark ? "text-white! bg-transparent! hover:bg-white/10!" : "text-black! bg-transparent! hover:bg-black/10!"}
            onClick={() => closeWithStatus("denied")}
          >
            Deny
          </Button>
          <Button
            as="button"
            variant="white"
            className={isDark ? "bg-white! text-black! hover:bg-neutral-200!" : "bg-black! text-white! hover:bg-black/90!"}
            onClick={() => closeWithStatus("accepted")}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}


