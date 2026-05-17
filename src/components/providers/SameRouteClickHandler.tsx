"use client";

import {
  isIgnorableAnchor,
  isInternalUrl,
  isModifiedClick,
  isSameRoute,
  resolveAnchorHref,
  shouldAllowHashNavigation,
} from "@/lib/navigation/same-route";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Global capture-phase handler: clicking an internal link to the current route
 * scrolls to top and refreshes RSC data (e.g. navbar logo on homepage).
 */
export function SameRouteClickHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || isModifiedClick(event)) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || isIgnorableAnchor(anchor)) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const targetUrl = resolveAnchorHref(href, window.location.href);
      if (!targetUrl || !isInternalUrl(targetUrl, window.location.origin)) return;

      const currentUrl = new URL(window.location.href);
      if (!isSameRoute(currentUrl, targetUrl)) return;
      if (shouldAllowHashNavigation(currentUrl, targetUrl)) return;

      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.refresh();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return null;
}
